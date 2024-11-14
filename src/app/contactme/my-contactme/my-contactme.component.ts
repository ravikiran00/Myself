import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModelGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-contactme',
  standalone: true,
  imports:[FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './my-contactme.component.html',
  styleUrls: ['./my-contactme.component.css']
})
export class MyContactmeComponent implements OnInit {

  //UserName : string = "";
  //UserEmail : string = "";
  //UserMessage : string = "";
  //UserMobileNo : string = "";
  UserGroup! : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.UserGroup = this.fb.group({
      UserName : new FormControl("",[Validators.required]),
      UserEmail : new FormControl("",[Validators.required, Validators.email]),
      UserMobileNo : new FormControl("",[Validators.maxLength(12),Validators.minLength(10)]),
      UserMessage : new FormControl("", [Validators.required])
    })
  }

  get UserName(){
    return this.UserGroup.controls["UserName"] as FormControl;
  }

  get UserEmail(){
    return this.UserGroup.controls["UserEmail"] as FormControl
  }

  get UserMobileNo(){
    return this.UserGroup.controls["UserMobileNo"] as FormControl
  }

  get UserMessage(){
    return this.UserGroup.controls["UserMessage"] as FormControl
  }
  
  formSubmit(){
    console.log(this.UserGroup);
  }
}
