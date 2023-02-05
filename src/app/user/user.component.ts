import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isOn = false;
  welcome: string|undefined;
  text = 'my dog has fleas.';
  name="hi mona"
  constructor(private UserService:UserService) { }

  ngOnInit(): void {

    this.welcome = this.UserService.isLoggedIn ?
    'Welcome, ' + this.UserService.user.name : 'Please log in.';
    this.UserService.getValue()
  }
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }


}





