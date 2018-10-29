import { Component, OnInit } from '@angular/core';
import { ScoreListService } from '../services/score-list.service';
import { UserListService } from '../services/user-list.service';
@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  listScores : any[];
  constructor(private scoreList: ScoreListService, private userService: UserListService) { }

  ngOnInit() {
    return this.listScores = this.scoreList.listScores;
  }

  onClick() {
    // console.log("hello");
    return this.userService.onGet()
                .subscribe(
                  (user: any[]) => { this.listScores = user;
                    console.log(this.listScores);
                  },
                  (error) => { console.log("An erro occure:"+ error);}
                )
  }
}
