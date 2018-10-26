import { Component, OnInit } from '@angular/core';
import { ScoreListService } from '../services/score-list.service';
@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {

  listScores = [];
  constructor(private scoreList: ScoreListService) { }

  ngOnInit() {
    return this.listScores = this.scoreList.listScores;
  }


}
