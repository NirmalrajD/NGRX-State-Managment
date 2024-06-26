import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducer/customer.reducer'

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
    fromCustomer.customerFeatureKey
)

export const selectCustomer = createSelector(
    selectCustomerState, // <-- State type 
    (state: fromCustomer.CustomerState) => state.customers // <-- Customer state type, and this will return state property which is inside the state
)