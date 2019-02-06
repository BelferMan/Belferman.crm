import { Component, OnInit } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

contacts: Contact[];
headerTitle: string;
headerIcon: string;

  constructor(
    private _titleService: Title,
    private _contactService: ContactsService
    ) { }

  ngOnInit(): void {
    this.headerTitle = 'Contacts';
    this.headerIcon = 'fas fa-envelope';
    this.contacts = [];
    this._titleService.setTitle('Company CRM | Contacts Page');
    this._contactService.getContacts().subscribe((contacts: Contact[]) => {
      this.contacts = _.sortBy(contacts, ['name']);
    });

  }

}
