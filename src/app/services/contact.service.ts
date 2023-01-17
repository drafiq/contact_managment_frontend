import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact.model";


@Injectable({
  providedIn: 'root'
})
export class ContactService {

   baseUrl = 'http://localhost:8080/api/contacts';

  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  getContactByEmail(email: String): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${email}`);
  }

  creatContact(contactData: Contact): Observable<any> {
    return this.http.post(this.baseUrl, contactData);
  }

  update(email: any, contactData: Contact): Observable<any> {
    return this.http.put(`${this.baseUrl}/${email}`, contactData);
  }

  delete(email: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${email}`);
  }
}
