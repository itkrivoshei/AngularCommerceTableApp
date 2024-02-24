import { createReducer, on } from '@ngrx/store';
import * as CommerceActions from '../actions/commerce.actions';

export const commerceFeatureKey = 'commerce';

export interface State {
  commerces: any[];
  error: any;
}

export const initialState: State = {
  commerces: [],
  error: undefined,
};

export const reducer = createReducer(
  initialState,
  on(CommerceActions.loadCommercesSuccess, (state, action) => ({
    ...state,
    commerces: action.commerces,
  })),
  on(CommerceActions.loadCommercesFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
