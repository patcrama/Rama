import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpResponse,HttpErrorResponse } from '@angular/common/http';
//import {Userscf } from '../Userscf';
import { Config } from 'protractor';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  usersurl = ' http://localhost:3000/users';

getUser() {
  //return this.http.get(this.usersurl);
  return this.http.get<any>(this.usersurl)
  .pipe(
    retry(3), // retry a failed request up to 3 times
    catchError(this.handleError)
  );
}
getUserresponse(): Observable<HttpResponse<Config>> {
  return this.http.get<any>(
    this.usersurl, {observe: 'response'});

}

addUser(user:any): Observable<any>{

  return this.http.post<any>(this.usersurl,user)
/*  .pipe(
    catchError(this.handleError('addUser', user))
  );*/
}

deleteUser(id:any): Observable<any>{

  return this.http.delete<any>(this.usersurl+'/'+id);
/*  .pipe(
    catchError(this.handleError('addUser', user))
  );*/
}

putUser(user:any): Observable<any>{

  return this.http.put<any>(this.usersurl+'/'+user.id,user);
/*  .pipe(
    catchError(this.handleError('addUser', user))
  );*/
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}
}