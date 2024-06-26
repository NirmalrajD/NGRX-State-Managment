import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { selectCustomer } from '../store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {

  // Similar data is shared between the two properties
  customers$! : Observable<Customer[]>

  constructor(private store: Store) { 
    this.customers$ = this.store.pipe(select(selectCustomer))
  }

  
}
