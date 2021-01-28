import { Component } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dashboard';
  constructor(private route:ActivatedRoute){

  }
  /*
  ngOnit(){
    this.route.queryParamMap.subscribe(params ={
      this.name=params['name'];
    });
  }*/
}
