import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherStation';
  readonly url = "https://localhost:44327/api/product";

  posts: any;

  constructor(private http: HttpClient) {}

  getPosts() {
    console.log("isHit");
    this.posts = this.http.get(this.url, httpOptions)
  }
}
