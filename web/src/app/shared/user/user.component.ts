import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  autenticate: boolean;
  id: number;
  name: String;
  token: String;


  constructor() {
    if (sessionStorage.getItem('currentUser')) {
      this.login(JSON.parse(sessionStorage.getItem('currentUser')));
    }
  }


  ngOnInit() {

  }

  login(data) {
    this.id = data.user._id;
    this.name = data.user.name;
    this.token = this.token;
    sessionStorage.setItem('currentUser', JSON.stringify(data));

    this.autenticate = true;
  }
  isAutenticate () {
    return this.autenticate;
  }
  logoff() {
      sessionStorage.removeItem('currentUser');
      this.id = null;
      this.name = null;
      this.token = null;
      this.autenticate = false;
      window.location.href = '/';
    }
}
