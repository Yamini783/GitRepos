import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    });
    service = TestBed.inject(GithubService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user repositories', () => {
    const username = 'exampleUser';
    const mockRepos = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];

    service.getUserRepos(username).subscribe(repos => {
      expect(repos).toEqual(mockRepos);
    });

    const req = httpTestingController.expectOne(`https://api.github.com/users/${username}/repos`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockRepos);
  });
});
