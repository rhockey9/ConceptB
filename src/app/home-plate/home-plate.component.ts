import { Component, OnInit } from '@angular/core';
import { PlayerTotalPoints } from '../models/nhl/playerototalpoints';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-home-plate',
  templateUrl: './home-plate.component.html',
  styleUrls: ['./home-plate.component.css']
})
export class HomePlateComponent implements OnInit {

  public tableData1: TableData;
  public xxx: PlayerTotalPoints;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Rank', 'Team', 'Player', 'Points'],
      dataRows: [
          ['1', 'Buffalo', 'Jack Eichel', '13'],
          ['2', 'Washington', 'Alexander Ovechkin', '10'],
          ['3', 'Pittsburgh', 'Sydney Crosby', '9'],
          ['4', 'Tampa Bay', 'Nikita Kucherov', '8'],
          ['5', 'Chicago', 'Patrick Kane', '8'],
          ['6', 'Edmonton', 'Connor McDavid', '7']
      ]
    };

    this.xxx = {
      startDate : new Date(),
      endDate : new Date(),
      details : [
        {name: "Jack Eichel", teamAbbreviation : "BUF", team: "Buffalo", games: 5, goals: 5, assists: 5, points: 10},
        {name: "Alexander Ovechkin", teamAbbreviation : "WSH", team: "Washington", games: 5, goals: 7, assists: 2, points: 9},
        {name: "Taylor Hall", teamAbbreviation : "BUF", team: "Buffalo", games: 5, goals: 3, assists: 6, points: 9}
      ]
    };


  }

}
