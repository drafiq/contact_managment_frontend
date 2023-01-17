import {Component} from '@angular/core';
import {Contact} from "../../models/contact.model";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent {
  contacts?: Contact[];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe({
        next: (contactData) => {
          this.contacts = contactData;
          console.log(contactData);
        },
        error: (e) => console.error(e)
      })
  }
}
