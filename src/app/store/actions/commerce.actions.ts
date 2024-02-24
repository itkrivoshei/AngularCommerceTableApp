import { createAction, props } from '@ngrx/store';

export const loadCommerces = createAction('[Commerce] Load Commerces');
export const loadCommercesSuccess = createAction(
  '[Commerce] Load Commerces Success',
  props<{ commerces: any[] }>()
);
export const loadCommercesFailure = createAction(
  '[Commerce] Load Commerces Failure',
  props<{ error: any }>()
);
