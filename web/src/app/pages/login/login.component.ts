import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserComponent } from 'src/app/shared/user/user.component';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';
import { HttpResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  currentUser: UserComponent;
  user: User;


  constructor(private formBuilder: FormBuilder, private rota: ActivatedRoute, private router: Router, private authService: AuthService,
    private _snackBar: MatSnackBar) {
    this.currentUser = new UserComponent();

    this.formLogin = formBuilder.group({
      cpf : ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      pass : ['', Validators.compose([Validators.required, Validators.minLength(3)])]
      });

  }

  ngOnInit() {
  }

  login () {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.controls.cpf.value, this.formLogin.controls.pass.value)
        .subscribe((resposta: HttpResponse<UserComponent>) => {
          this.currentUser.login(resposta);
          this.router.navigate(['/']);
        }, (error) => {
          this._snackBar.open(error.status === 401 ? 'Dados Incorretos' : error.statusText, 'Fechar', {
            duration: 2000
          });
        });
    }
  }

}
