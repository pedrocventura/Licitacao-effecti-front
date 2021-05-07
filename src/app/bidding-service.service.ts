import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bidding } from './bidding';
import {Observable,of, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BiddingService {

  private sourceUrl: string;

  constructor(private http: HttpClient) {
    this.sourceUrl = 'http://localhost:8080/';
  }


  public findAll(page : number|null): Observable<Bidding[]> {
    return this.http.get<Bidding[]>(this.sourceUrl+`?page=${page}`);
  }

  public setRead(bidding : Bidding){
     return this.http.post(this.sourceUrl+`setRead`,JSON.stringify(bidding));
  }

}
