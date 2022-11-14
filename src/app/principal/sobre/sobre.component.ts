import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor() {}

  tiles: Tile[] = [
    { text: 'One', cols: 4, rows: 4, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 3, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 2, color: '#DDBDF1' },
    { text: 'Five', cols: 4, rows: 1, color: '#DDBDF1' },
  ];
  ngOnInit(): void {}
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
