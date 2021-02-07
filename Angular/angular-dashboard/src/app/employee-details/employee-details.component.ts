import { Component, OnInit } from '@angular/core';
import { UserService} from '../config/UserService';
import { Observable} from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  userProfileForm1=this.fb.group({
    userName: ['', Validators.required],
    password: [' ', Validators.required],
    firstName: [' ', Validators.required],
    lastName: [' ', Validators.required]
  });
 constructor(private fb: FormBuilder, private Users: UserService) { }
 
  public users: any[] =[];
  public displayForm=false;
  public errorDetails ={message:'',error:false};
  ngOnInit(): void {

    this.Users.getUser()
    .subscribe(response=> 
      this.users=[...response]
      );

  }
  addUser(newUser: any){
    this.Users
    .addUser(newUser)
    .subscribe(user=>{
      this.users.push(user)
      //this.router.navigate([''])
    });
  }
  getUserdetails(user1: any){
    console.log(user1)
    this.userProfileForm1.controls['userName'].setValue(user1.userName);
    this.userProfileForm1.controls['password'].setValue(user1.password);
    this.userProfileForm1.controls['firstName'].setValue(user1.firstName);
    this.userProfileForm1.controls['lastName'].setValue(user1.lastName);
  }

  updateUserdetails(){

  this.userProfileForm1.valueChanges.subscribe(user=>{
    this.Users.putUser(user);
    this.getUserdetails(user);

  });
  }
   
}
