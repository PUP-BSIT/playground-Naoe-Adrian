import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  styleUrls: ['./first.component.css'],
  template: 'the passed parameters are {{queryParamsString | json}}'
})
export class FirstComponent implements OnInit {
  queryParamsString = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.queryParamsString = JSON.stringify(params);
    });
  }
}
