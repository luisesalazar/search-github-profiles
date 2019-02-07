import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository.interface';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  @Input() repository: Repository;

  constructor() { }

  ngOnInit() {
  }

}
