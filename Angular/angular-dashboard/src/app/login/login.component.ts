import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { UserService} from '../config/UserService';
import { Router } from '@angular/router';
//import {Userscf } from '../Userscf';

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
  public users: any[] =[];
  public errorDetails ={message:'',error:false};
  profileForm=this.fb.group({
     userName: ['', Validators.required],
     password: [' ', Validators.required],
     aliases: this.fb.array([
       this.fb.control('')
     ])
   });
  constructor(private fb: FormBuilder, private Users: UserService,private router: Router) { }
  
  ngOnInit(): void {
    this.profileForm.controls["userName"].valueChanges.subscribe(data=>console.log(data));
    this.Users.getUser()
    .subscribe(response=> 
  //    console.log(response)
      this.users=[...response]
      );
  }
  onSubmit(){
    //this.addUser(this.profileForm.value);
   if (this.profileForm.controls['userName'].value=="Rama" &&   
       this.profileForm.controls['password'].value=="krishna"){
          this.router.navigate(['/dashboard'])
       }
     else {
         this.errorDetails.message="Invalid Login or password, Please enter the correct details";
         this.errorDetails.error=true;
       
     }  
     
    console.log(this.profileForm.value);
  }
  updateProfile(){
    this.profileForm.patchValue({
      userName: 'Patchuru',
      password: 'sadhvik'
    });} 
    get aliases(){
      return this.profileForm.get('aliases') as FormArray;
    }
  addAlias(){
    this.aliases.push(this.fb.control(''));
  }
  
  addUser(newUser: any){
    this.Users
    .addUser(newUser)
    .subscribe(user=>{
      this.users.push(user)
      this.router.navigate([''])
    });
  }

  deleteUser(id:any){
   this.Users.deleteUser(id).subscribe(()=>console.log('Deleted'))
  }
  showUsers(){
    this.Users.getUser()
 /*   .subscribe((data)=>this.usercfg={
      usersurl: (data as any).usersurl
    });*/
  }
  /*
  showUserresponse(){
    this.Users.getUserresponse()
        // resp is of type `HttpResponse<Users>`
    .subscribe(resp =>{
      //display its headers
      const keys=resp.headers.keys();
      this.headers=keys.map(key=>
        `${key}:${resp.headers.get(key)}`);
        // access the body directly, which is typed as `Config`.
        this.usercfg={... resp.body};
    });
  }*/
  
  

/*
  upDateuserName(){
   this.userName.setValue('Krishna');
 }*/
}
