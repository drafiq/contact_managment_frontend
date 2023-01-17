import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username?: string, password?: string): boolean {
    let isAuth = false;
    if (!!username && !!password) {

      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
      this.http.get("http://localhost:8080/api/contacts", {headers}).subscribe({
        next: (contactsData) => {
          isAuth = (!!contactsData)
        },
        error: (e) => {
          console.error(e)
        }
      })
    }
    return isAuth;
  }
}
