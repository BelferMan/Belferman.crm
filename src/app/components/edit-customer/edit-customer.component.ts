import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;
  id: string;

  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };

  constructor(
    private _title: Title,
    private _customersService: CustomersService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _fms: FlashMessagesService
  ) { }

  ngOnInit() {
    this._title.setTitle('Company CRM | Edit Customer form');
    this.headerTitle = 'Edit Customer Form';
    this.headerIcon = 'fas fa-pen';
    this.id = this._activatedRoute.snapshot.params['id'];
    this._customersService.getCustomer(this.id).subscribe( customer => this.customer = customer);
  }

  onSubmit({value, valid}: {value: Customer, valid: boolean}):void {
    
    if(valid) {
      value.id = this.id;
      this._fms.show('Customer Updated', {
        cssClass: 'fixed-top m-auto bg-warning w-50 text-white text-center',
        timeout: 3000
      });
      this._customersService.updateCustomer(value);
      this._router.navigate(['/customers']);
    }
  }

}
