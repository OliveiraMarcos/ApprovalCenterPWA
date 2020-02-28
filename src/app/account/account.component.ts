import { Component} from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { LoggedComponent } from 'src/app/onsenui/nav/logged/logged.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'ons-page[app-account]',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private navigator: OnsNavigator) {
  }

  pushRegister(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.pushPage(RegisterComponent);
  }
  signIn(){
    this.navigator.element.pushPage(LoggedComponent);
  }
}
