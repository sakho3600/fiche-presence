import { Component, OnInit, Input } from '@angular/core';
import { UserListService } from '../services/user-list.service';
import { ScoreListComponent } from '../score-list/score-list.component';
import { ScoreListService } from '../services/score-list.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  userList = [
    {Id: 3, name: 'User1',isPresent: false,date: new Date()},
    {Id: 4, name: 'User2',isPresent: false,date: new Date()},
    {Id: 5, name: 'User3',isPresent: false,date: new Date()},
    {Id: 6, name: 'User4',isPresent: false,date: new Date()},
    {Id: 7, name: 'User5',isPresent: false,date: new Date()},
    {Id: 8, name: 'User6',isPresent: false,date: new Date()}
  ]
  constructor(private userService : UserListService, private scoreService: ScoreListService) { }

  ngOnInit() {
  }

  onTouched(user) {
    this.scoreService.onPush(user);
    this.userService.onCreate(user)
        .subscribe(
          (response) =>{console.log(response)},
          (error) => {console.log('An erro occure:'+ error)},
        )
    // console.log(user);
  }

  onGet() {
    return this.userList;
  }



}
