import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {User} from '../models/User';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(cpf: string, pass: number) {
      return this.http.post<any>(`${environment.apiUrl}/auth/login`, { cpf, pass:pass*3.14 })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  console.log(user);
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  sessionStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }
              return user;
          }));
  }
  register(name: string, cpf: string, phone: string, email: string, password: number) {
      return this.http.post<any>(`${environment.apiUrl}/auth/register`, { cpf, pass: (password*3.14), phone, email, name })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  console.log(user);
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  sessionStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }

              return user;
          }));
  }
  resetPassword(token: string, email: string, password: number) {
      password = password*3.14;
      return this.http.post<any>(`${environment.apiUrl}/auth/reset_password`, { token, email, password })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  console.log(user);
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  sessionStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }

              return user;
          }));
  }
  forgotPassword(email: string) {
      return this.http.post<any>(`${environment.apiUrl}/auth/forgot_password`, { email })
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  console.log(user);
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  sessionStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }

              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      sessionStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
  listarServicos() {
    return this.http.get<any>(`${environment.apiUrl}/servico`)
        .pipe(map(servicos => {
            // login successful if there's a jwt token in the response
            if (servicos) {
                console.log(JSON.stringify(servicos));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return servicos;
        }));
 }
  listarAgendas(servicoId) {
    return this.http.get<any>(`${environment.apiUrl}/auth/listar_agendas?servicoId=${servicoId}`)
        .pipe(map(servicos => {
            // login successful if there's a jwt token in the response
            if (servicos) {
                console.log(JSON.stringify(servicos));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return servicos;
        }));
 }
}
