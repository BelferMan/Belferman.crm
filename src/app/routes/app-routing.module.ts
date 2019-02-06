import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from '../components/customers/customers.component';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AddCustomerComponent } from '../components/add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../components/customer-details/customer-details.component';
import { EditCustomerComponent } from '../components/edit-customer/edit-customer.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../guards/auth.guard';


const appRoutes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full'},
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
  { path: 'add-customer', component: AddCustomerComponent, canActivate: [AuthGuard] },
  { path: 'customers/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'customers/:id/edit', component: EditCustomerComponent, canActivate: [AuthGuard] },
  { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
