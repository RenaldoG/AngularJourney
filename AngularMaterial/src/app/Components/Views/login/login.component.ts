import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  col: number;
  row: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', col: 1, row: 1, color: 'lightblue'},
    {text: 'two', col: 1, row: 2, color: 'lightgreen'},
    {text: 'three', col: 1, row: 1, color: 'lightpink'},
    {text: 'four', col: 1, row: 1, color: '#DDBDF1'},
  ]

  constructor() { }

  ngOnInit() {
  }

  onFok() {
    console.log("Fok");
  }

}
