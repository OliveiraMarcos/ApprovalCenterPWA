import { Component, ViewChildren, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { LoggedComponent } from 'src/app/onsenui/nav/logged/logged.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationMessages, GenericValidator, DisplayMessages } from 'src/app/generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth/authentication.service';
import { ToastService } from 'src/app/onsenui/nav/ons/toast.service';

@Component({
  selector: 'ons-page[app-account]',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, AfterViewInit{

  @ViewChildren(FormControlName,{read: ElementRef}) formInputElements: ElementRef[];
  
  loginForm: FormGroup;
  isLoad:boolean=false;


  validationMessages : ValidationMessages;
  genericValidator : GenericValidator;
  displayMessages: DisplayMessages = {};
  constructor(private navigator: OnsNavigator,
              private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private toast:ToastService) 
  {
    this.validationMessages = {
      email : {
        required :  'The Email is requered',
        email :     'The Email field is not a valid e-mail address',
        maxlength : 'The Email must have at max 256 character'
      },
      password : {
        required : 'The Password is requered',
        minlength : 'The Name must have at min 6 character'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

  }

  pushRegister(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.pushPage(RegisterComponent);
  }

  pushForgotPassword(){
    this.navigator.element.pushPage(ForgotPasswordComponent);
  }

  signIn(){
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoad = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
            result => {
              if (result.success) {
              //Go to logged page 
              this.toast.showToast('Success!');
              this.isLoad = false;
              this.navigator.element.pushPage(LoggedComponent);
            } else {
              //send show errors
              result.errors.forEach(msg => {
                this.toast.showToast(msg);
                this.isLoad = false;
              });
            }
          },
          fail => {
            //show erros
            fail.error.errors.forEach(msg => {
              this.toast.showToast(msg);
              this.isLoad = false;
            });
          }
      );
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
  ngOnInit(): void {
    if (this.authenticationService.currentUserValue.isActive) {
      this.navigator.element.pushPage(LoggedComponent);
    }
    this.loginForm = this.fb.group({
      email : ['',[Validators.required, Validators.email, Validators.maxLength(256)]],
      password : ['',[Validators.required, Validators.minLength(6)]],
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef)=>fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(()=> {
      this.displayMessages = this.genericValidator.processMenssager(this.loginForm);
    });
  }
}
