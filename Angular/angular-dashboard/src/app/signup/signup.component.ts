import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import {UserService } from '../config/UserService';
import {Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public users: any[] =[];
 public errorDetails ={message:'',error:false};
 userProfileForm=this.fb.group({
     userName: ['', Validators.required],
     password: [' ', Validators.required],
     firstName: [' ', Validators.required],
     lastName: [' ', Validators.required]
   });
  constructor(private fb: FormBuilder, private Users: UserService,private router: Router) { }
  

  ngOnInit(): void {
  }
  onSubmit(){
    let pswdrules= /^[A-Za-z]\w{8,14}$/;

    if(this.userProfileForm.controls['password'].value.match(pswdrules) ) { 
      this.addUser(this.userProfileForm.value);
      console.log('Passed password validation rules')
            }
    else
    { 
     
     this.errorDetails.message="Password validation failed, Please verify the password Rules:/^[A-Za-z]\w{8,14}$/";
     this.errorDetails.error=true;
     //this.errorDetails.pswdrules=pswdrules;
    }

  
    
    console.log(this.userProfileForm.value);
  }
  
  addUser(newUser: any){
    this.Users
    .addUser(newUser)
    .subscribe(user=>{
      this.users.push(user);
      this.errorDetails.message="User has been added Successfully";
      this.errorDetails.error=false;
      this.router.navigate(['/login'])
    },()=>{
      this.errorDetails.message="Signup user Failed";
      this.errorDetails.error=true;
  });
  }

}
