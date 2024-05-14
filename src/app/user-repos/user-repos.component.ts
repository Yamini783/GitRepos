import { Component } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent {
  repos: any[] = [];
  username: string = '';

  constructor(private githubService: GithubService) {}

  searchRepos() {
    this.githubService.getUserRepos(this.username)
      .subscribe(data => {
        this.repos = data;
      });
  }
}
