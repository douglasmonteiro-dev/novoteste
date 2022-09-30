import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user: UserComponent;
  userMenu: string[] = ['Login', 'Ajuda'];
  darkTheme: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.user = new UserComponent;
  }

  ngOnInit() {
  }
  changeTheme() {
    this.darkTheme = !this.darkTheme
    if (this.darkTheme) {
      this.document.body.classList.add('theme-alternate');
    } else {
      this.document.body.classList.remove('theme-alternate');
    }
  }
}
