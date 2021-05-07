import { Component } from '@angular/core';
import { Bidding } from './bidding';
import { BiddingService } from './bidding-service.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private BiddingService: BiddingService) {
  }

  title = 'Licitações IFC';
  biddings: Bidding[] = [];
  page = 1;
  ngOnInit() {
    this.BiddingService.findAll(this.page).subscribe(data => {
      this.biddings = data;
    });
  }

  nextPage() {
    this.page++;
    this.BiddingService.findAll(this.page).subscribe(data => {
      this.biddings = data;
    });
  }
  previousPage() {
    if (this.page == 1) {
      return
    }
    else {
      this.page--
    };
    this.BiddingService.findAll(this.page).subscribe(data => {
      this.biddings = data;
    });

  }

  setRead(bidding: Bidding) {
    debugger
    this.BiddingService.setRead(bidding);
  }

}
