import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

const newList: UserData[] = [];

const datata: UserData[] = [
  { id: 1, name: "Freezing", temprature: "22", test: "ola" },
  { id: 2, name: "Freezing", temprature: "22", test: "ola" },
  { id: 3, name: "Freezing", temprature: "22", test: "ola" },
  { id: 4, name: "Freezing", temprature: "22", test: "ola" },
  { id: 5, name: "Freezing", temprature: "22", test: "ola" },
]

@Component({
  selector: 'app-elements-table',
  templateUrl: './elements-table.component.html',
  styleUrls: ['./elements-table.component.css']
})
export class ElementsTableComponent implements OnInit {
  posts: any;
  displayedColumns: string[] = ['id', 'name', 'temprature', 'test'];
  readonly url = "https://localhost:44304/weatherforecast";
  dataList: any = [];
  dataSource:any = [];

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  ngOnInit() {
  }
  

  getPosts()  {
     this.http.get<UserData[]>(this.url, httpOptions).subscribe((data: {}) => {
      console.log(data)
    this.dataList = data
    this.dataSource = new MatTableDataSource<UserData>(this.dataList);
    });
  }
  
}

export interface UserData {
  id: number;
  name: string;
  temprature: string;
  test: string;
}