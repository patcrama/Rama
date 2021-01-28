import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /*profileForm = new FormGroup({
  userName : new FormControl('Rama1'),
  password : new FormControl('Password'),
   });*/

   profileForm=this.fb.group({
     userName: ['', Validators.required],
     password: [' ', Validators.required]
   })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.warn(this.profileForm.value);
  }
  updateProfile(){
    this.profileForm.patchValue({
      userName: 'Patchuru',
      password: 'sadhvik'
    }); 
  }
/*
  upDateuserName(){
   this.userName.setValue('Krishna');
 }*/
}
