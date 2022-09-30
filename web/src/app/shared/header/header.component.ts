import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title = '';
  user: UserComponent;
  toggleControl = new FormControl(false);
  @Output() theme = new EventEmitter<boolean>();


  constructor(private overlay: OverlayContainer) {
    this.user = new UserComponent;
   }

  ngOnInit() {
    this.toggleControl.valueChanges.subscribe((toggle) => {
      if (toggle) {
        this.theme.emit(true);
      } else {
        this.theme.emit(false);
      }
    });
  }

}
