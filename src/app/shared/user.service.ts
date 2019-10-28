import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map(users => {
        const newUsers = [];
        for (let user of users) {
          newUsers.push({ email: user.email, username: user.username });
        }
        return newUsers;
      }),
      tap(users => console.log(users))
    );
  }

  getUserByEmail(email: string): Observable<any[]> {
    // return this.http.get<any[]>(`${this.url}?email=${email}`);
    return this.http.get<any[]>(this.url, {
      params: new HttpParams().set('email', email)
    });
  }

  getUserByUsername(username: string): Observable<any[]> {
    return this.http.get<any[]>(this.url, {
      params: new HttpParams().set('username', username)
    });
  }
}
