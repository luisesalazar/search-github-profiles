import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
