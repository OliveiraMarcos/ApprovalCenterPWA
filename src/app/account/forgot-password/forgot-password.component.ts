import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { ValidationMessages, GenericValidator, DisplayMessages } from 'src/app/generic-form-validation';
import { ForgotPassword } from './forgot-password';
import { OnsNavigator } from 'ngx-onsenui';
import * as ons from 'onsenui';
import { AccountService } from '../services/account.service';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'ons-page[app-forgot-password]',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName,{read: ElementRef}) formInputElements: ElementRef[];
  
  forgotPasswordObj:ForgotPassword;
  forgotPasswordForm: FormGroup;
  isLoad:boolean=false;

  validationMessages : ValidationMessages;
  genericValidator : GenericValidator;
  displayMessages: DisplayMessages = {};

  constructor(private navigator: OnsNavigator, 
    private fb: FormBuilder, 
    private accountServer: AccountService ) {
      this.validationMessages = {
        email : {
          required : 'The Email is requered',
          email : 'The Email field is not a valid e-mail address',
          maxlength : 'The Email must have at max 256 character'
        }
      };

      this.genericValidator = new GenericValidator(this.validationMessages);

    }

  popForgotPassword(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.popPage();
  }

  forgotPassword(){
    this.isLoad = true;
    this.forgotPasswordObj = Object.assign({},this.forgotPasswordObj,this.forgotPasswordForm.value);
    this.accountServer
        .post<ForgotPassword>(this.forgotPasswordObj,'forgot-password')
        .subscribe(
          result => {
            if (result.success) {
              //Go to login 
              this.popForgotPassword();
            } else {
              //send show errors
              result.errors.forEach(msg => {
                this.showToast(msg);
              });
            }
          },
          fail => {
            //show erros
            fail.error.errors.forEach(msg => {
              this.showToast(msg);
            });
          }
        )

  }
  private showToast(msg:string):void {
    this.isLoad = false;
    ons.notification.toast(msg, {timeout: 2000});
  }  
  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email : ['',[Validators.required, Validators.email, Validators.maxLength(256)]]
    });
  }

  
  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef)=>fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(()=> {
      this.displayMessages = this.genericValidator.processMenssager(this.forgotPasswordForm);
    });
  }
}
