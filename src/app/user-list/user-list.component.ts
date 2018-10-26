import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  userList = [
    {Id: 3, name: 'User1',isPresent: false},
    {Id: 4, name: 'User2',isPresent: false},
    {Id: 5, name: 'User3',isPresent: false},
    {Id: 6, name: 'User4',isPresent: false},
    {Id: 7, name: 'User5',isPresent: false},
    {Id: 8, name: 'User6',isPresent: false}
  ]
  constructor() { }

  ngOnInit() {
  }

  onTouched(user) {
    console.log(user);
  }


}
