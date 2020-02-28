import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ValidationMessages, DisplayMessages, GenericValidator } from '../generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'ons-page[app-register]',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit{
 
  @ViewChildren(FormControlName,{read: ElementRef}) formInputElements: ElementRef[];
  
  registerForm: FormGroup;

  validationMessages : ValidationMessages;
  genericValidator : GenericValidator;
  displayMessages: DisplayMessages = {};


  constructor(private navigator: OnsNavigator, private fb: FormBuilder) {
    this.validationMessages = {
      name:{
        required : 'The Name is requered',
        minLength : 'The Name must have at min 2 character',
        maxLength : 'The Name must have at max 256 character'
      },
      email : {
        required : 'The Email is requered',
        email : 'The Email field is not a valid e-mail address',
        maxLength : 'The Email must have at max 256 character'
      },
      password : {
        required : 'The Password is requered',
        minLength : 'The Name must have at min 6 character'
      },
      passwordConfirm : {
        required : 'The Password is requered',
        minLength : 'The Name must have at min 6 character',
        equalTo : 'The password and confirmation password do not match'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  popRegister(){
    // Push SecontPageComponent to ons-navigator
    this.navigator.element.popPage();
  }

  register(){
    
  }

  ngOnInit(): void {
    let password = new FormControl('',[Validators.required, Validators.minLength(6)]);
    let passwordConfirm = new FormControl('',[Validators.required, Validators.minLength(6), CustomValidators.equalTo(password)]);

    this.registerForm = this.fb.group({
      name : ['',[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      email : ['',[Validators.required, Validators.email, Validators.maxLength(256)]],
      password : password,
      passwordConfirm : passwordConfirm
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
