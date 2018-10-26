import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreListService {
  
  listScores = [
    {date: '23-08-2018', name: 'User1', isPresent: true},
    {date: '24-08-2018', name: 'User2', isPresent: false},
    {date: '25-08-2018', name: 'User3', isPresent: true},
    {date: '26-08-2018', name: 'User4', isPresent: true},
    {date: '27-08-2018', name: 'User5', isPresent: false},
    {date: '28-08-2018', name: 'User6', isPresent: true}
  ]
  var = "fera"
  constructor() { }
}
