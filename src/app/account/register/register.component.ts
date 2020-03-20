import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { Observable, fromEvent, merge } from 'rxjs';
import { Register } from './register';
import { ValidationMessages, GenericValidator, DisplayMessages } from 'src/app/generic-form-validation';
import { AccountService } from '../services/account.service';
import { ToastService } from 'src/app/onsenui/nav/ons/toast.service';

@Component({
  selector: 'ons-page[app-register]',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit{
 
  @ViewChildren(FormControlName,{read: ElementRef}) formInputElements: ElementRef[];
  
  registerObj:Register;
  registerForm: FormGroup;
  isLoad:boolean=false;

  validationMessages : ValidationMessages;
  genericValidator : GenericValidator;
  displayMessages: DisplayMessages = {};


  constructor(private navigator: OnsNavigator, 
    private fb: FormBuilder, 
    private accountServer: AccountService,
    private toast:ToastService) {
    this.validationMessages = {
      username:{
        required : 'The Name is requered',
        minlength : 'The Name must have at min 2 character',
        maxlength : 'The Name must have at max 256 character'
      },
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

  popRegister(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.popPage();
  }

  register(){
    this.isLoad = true;
    this.registerObj = Object.assign({},this.registerObj,this.registerForm.value);
    this.accountServer
        .post<Register>(this.registerObj,'register')
        .subscribe(
          result => {
            if (result.success) {
              //Go to login 
              this.popRegister();
              this.toast.showToast(`A confirmation email has been sent to ${result.data.email}.`);
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
    let password = new FormControl('',[Validators.required, Validators.minLength(6)]);
    let confirmPassword = new FormControl('',[Validators.required, Validators.minLength(6), CustomValidators.equalTo(password)]);
    this.registerForm = this.fb.group({
      username : ['',[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      email : ['',[Validators.required, Validators.email, Validators.maxLength(256)]],
      password : password,
      confirmPassword : confirmPassword
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef)=>fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(()=> {
      this.displayMessages = this.genericValidator.processMenssager(this.registerForm);
    });
  }
}
