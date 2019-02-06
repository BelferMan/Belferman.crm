import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomersService } from '../../services/customers.service';
import { Customer } from '../../models/customer';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as _ from 'lodash';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;
  customers: Customer[];
  customersCache: Customer[];
  phone: string = '';

  constructor(
    private titleService: Title,
    private _customersService: CustomersService,
    private _fms: FlashMessagesService
    ) { }

  ngOnInit(): void {
    this.headerTitle = 'Customers';
    this.headerIcon = 'fas fa-user';
    this.titleService.setTitle('Company CRM | Customers Page');
    this._customersService.getCustomers().subscribe( (customers) => this.customers = this.customersCache = customers );
  }

  showTools(e): void {
    e.target.children[0].children[0].style.cssText = 'visibility: visible !important';
  }

  hideTools(event): void {
    event.target.children[0].children[0].style.cssText = 'visibility: hidden !important';
  }

  onDeleteCustomer(customerId, event): void {
    event.preventDefault();
    if( confirm('Are you sure?')){
      
      this._fms.show('Customer Deleted', {
        cssClass: 'fixed-top m-auto bg-danger w-50 text-white text-center',
        timeout: 3000
      });
      this._customersService.deleteCustomer(customerId);
    }

  }

  onSearch(prop: string): void { //prop = phone
    let clientText = this[prop].toLowerCase().trim();
    if(clientText.length > 0){
      this.customers = this.customers.filter (customer => _.includes(customer[prop].toLowerCase(), clientText));
    } else {
      this.customers = this.customersCache;
    }

  }

}
