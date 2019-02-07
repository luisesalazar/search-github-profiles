import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GitHubServiceService } from '../git-hub-service.service';
import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';

@Component({
  selector: 'app-profile-search-results',
  templateUrl: './profile-search-results.page.html',
  styleUrls: ['./profile-search-results.page.scss'],
})
export class ProfileSearchResultsPage implements OnInit {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public gitHubService: GitHubServiceService
    ) { }

  getUserInformation(): void {
    this.gitHubService.getUserInfo(this.username).subscribe((data: User) => this.user = data);
    this.gitHubService.getReposInfo(this.username).subscribe((data: Repository[]) => this.repositories = data);

    // this.gitHubService.mockGetUserInfo(this.username).subscribe((data: User) => this.user = data);
    // this.gitHubService.mockGetRepositoryInfo(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

}
