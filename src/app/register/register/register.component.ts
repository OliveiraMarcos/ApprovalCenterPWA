import { Component } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  selector: 'ons-page[app-register]',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private navigator: OnsNavigator) {
  }

  popRegister(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.popPage();
  }
}
