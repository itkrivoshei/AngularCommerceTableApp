import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CommerceActions from '../actions/commerce.actions';
import { CommerceService } from '../../services/commerce.service';

@Injectable()
export class CommerceEffects {
  loadCommerces$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommerceActions.loadCommerces),
      mergeMap(() =>
        this.commerceService.getCommerces().pipe(
          map((commerces) =>
            CommerceActions.loadCommercesSuccess({ commerces })
          ),
          catchError((error) =>
            of(CommerceActions.loadCommercesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private commerceService: CommerceService
  ) {}
}
