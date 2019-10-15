
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private heroesUrl = 'https://localhost:44327/api/values';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getInventory(): Observable<any> {
    return this.http.get<any>(this.heroesUrl);
  }
}

