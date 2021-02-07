import { Component, OnInit } from '@angular/core';
import { UserService} from '../config/UserService';

@Component({
  selector: 'app-managerdetails',
  templateUrl: './managerdetails.component.html',
  styleUrls: ['./managerdetails.component.scss']
})
export class ManagerdetailsComponent implements OnInit {

  public users: any[] =[];
  constructor(private Users: UserService) { }

  ngOnInit(): void {

    this.Users.getUser()
    .subscribe(response=> 
      this.users=[...response]
      );

  }

}
