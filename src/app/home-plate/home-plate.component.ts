import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Rank', 'Team', 'Player', 'Points'],
      dataRows: [
          ['1', 'Buffalo', 'Jack Eichel', '12'],
          ['2', 'Washington', 'Alexander Ovechkin', '10'],
          ['3', 'Pittsburgh', 'Sydney Crosby', '9'],
          ['4', 'Tampa Bay', 'Nikita Kucherov', '8'],
          ['5', 'Chicago', 'Patrick Kane', '8'],
          ['6', 'Edmonton', 'Connor McDavid', '7']
      ]
  };
  }

}
