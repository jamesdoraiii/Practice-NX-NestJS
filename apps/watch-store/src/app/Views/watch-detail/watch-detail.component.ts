import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Watch } from '@practice/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'practice-watch-detail',
  templateUrl: './watch-detail.component.html',
  styleUrls: ['./watch-detail.component.scss']
})
export class WatchDetailComponent implements OnInit {
  watch: Watch;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  getWatch(id: string) {
    this.http.get<Watch>(`/api/watches/${id}`).subscribe(watchList => {
      this.watch = watchList;
    });
  }

  ngOnInit(): void {
    this.getWatch(this.route.snapshot.paramMap.get('id'));
  }
}
