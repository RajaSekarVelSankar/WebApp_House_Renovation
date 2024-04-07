import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    this.loggedUser = new User();
    this.loggedUser.type = 'none';

    const readUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (readUser) {
      this.loggedUser = readUser;
    }
    
    console.log(this.loggedUser.type);
  }


  loggedUser : User;


  logout() {
    localStorage.clear();
  }

  changePassword() {
    this.router.navigate(['changePassword'])
  }

}
