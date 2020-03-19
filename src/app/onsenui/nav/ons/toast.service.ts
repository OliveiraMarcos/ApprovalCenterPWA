import { Injectable } from '@angular/core';
import * as ons from 'onsenui';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  public showToast(msg:string):void {
    ons.notification.toast(msg, {timeout: 2000});
  }
}
