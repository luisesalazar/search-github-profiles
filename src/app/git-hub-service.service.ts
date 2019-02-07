import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { USER_LIST } from './mocks/user.mocks';
import { User } from './models/user.interface';
import { Repository } from './models/repository.interface';
import { REPOSITORY_LIST } from './mocks/reposiroty.mocks';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {
  private baseUrl  = 'https://api.github.com/users';
  private reposUrl = 'repos';

  constructor(private http: HttpClient) { }

  getUserInfo(username: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${username}`)
    .pipe(
      tap(
        data => console.log(data),
        error => this.handleError(error)
      )
    );
  }

  getReposInfo(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .pipe(
      tap(
        data => console.log(data),
        error => this.handleError(error)
      )
    );
  }

  /*
    Finding the username from within USER_LIST, equal to the Username passed in.
    Returning the results as an observable.
  */
  mockGetUserInfo(username: string): Observable<User> {
    return of(USER_LIST.filter(user => user.name === username)[0]);
  }

  /*
    Finding the repositorie from within REPOSITORY_LIST, equal to the Username passed in.
    Returning the results as an observable.
  */
  mockGetRepositoryInfo(username: string): Observable<Repository[]> {
    return of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
