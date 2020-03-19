import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder, FormControl, Validators, EmailValidator } from '@angular/forms';
import { Register } from '../register/register';
import { ValidationMessages, GenericValidator, DisplayMessages } from 'src/app/generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';
import { AccountService } from '../services/account.service';
import { CustomValidators } from 'ngx-custom-validators';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPassword } from './reset-password';
import { ToastService } from 'src/app/onsenui/nav/ons/toast.service';

@Component({
  selector: 'ons-page[app-reset-password]',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit, AfterViewInit {
   
  @ViewChildren(FormControlName,{read: ElementRef}) formInputElements: ElementRef[];
  
  resetPasswordObj:ResetPassword;
  resetPasswordForm: FormGroup;
  isLoad:boolean=false;
  validationMessages : ValidationMessages;
  genericValidator : GenericValidator;
  displayMessages: DisplayMessages = {};

  constructor(private fb: FormBuilder, 
              private accountServer: AccountService,
              private route: ActivatedRoute,
              private router: Router,
              private toast:ToastService) {

    this.validationMessages = {
      email : {
        required : 'The Email is requered',
        email : 'The Email field is not a valid e-mail address',
        maxlength : 'The Email must have at max 256 character'
      },
      password : {
        required : 'The Password is requered',
        minlength : 'The Name must have at min 6 character'
      },
      confirmPassword : {
        required : 'The Password is requered',
        minlength : 'The Name must have at min 6 character',
        equalto : 'The password and confirmation password do not match'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  resetPassword(){
    this.isLoad = true;
    this.resetPasswordObj = Object.assign({},this.resetPasswordObj,this.resetPasswordForm.value);
    this.accountServer
        .post<Register>(this.resetPasswordObj,'reset-password')
        .subscribe(
          result => {
            if (result.success) {
              this.isLoad = false;
              this.router.navigate(['/']);
              //Go to login 
              //this.popRegister();
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
  

  ngOnInit(): void {
    
    console.log(this.route.snapshot.queryParamMap.get('email'));
    
    let password = new FormControl('',[Validators.required, Validators.minLength(6)]);
    let confirmPassword = new FormControl('',[Validators.required, Validators.minLength(6), CustomValidators.equalTo(password)]);
    this.resetPasswordForm = this.fb.group({
      email : [this.route.snapshot.queryParamMap.get('email'),[Validators.required, Validators.email, Validators.maxLength(256)]],
      password : password,
      confirmPassword : confirmPassword,
      tokenPassword:[this.route.snapshot.queryParamMap.get('token')]
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef)=>fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(()=> {
      this.displayMessages = this.genericValidator.processMenssager(this.resetPasswordForm);
    });
  }

}
