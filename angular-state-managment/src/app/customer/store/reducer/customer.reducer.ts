import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as customerAction from '../action/customer.actions';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[];
}

export const initialState: CustomerState = {
  customers:[]
};

export const customerReducer = createReducer(
  initialState,
  on(customerAction.addCustomers, (state: CustomerState, {customer}) => (
    {
      ...state,
      customers: [...state.customers, customer]
    }
  ))
);

