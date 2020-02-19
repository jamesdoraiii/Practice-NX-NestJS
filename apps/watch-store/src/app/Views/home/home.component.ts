import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Watch } from '@practice/api-interfaces';

@Component({
  selector: 'practice-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  watchList: Watch[] = [];

  constructor(private http: HttpClient) {}

  getWatches() {
    this.http.get<Watch[]>('/api/watches/watchList').subscribe(watchList => {
      this.watchList = watchList;
    });
  }

  ngOnInit() {
    this.getWatches();
  }
}
