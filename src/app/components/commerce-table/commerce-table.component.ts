import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCommerces } from '../../store/actions/commerce.actions';
import { State } from '../../store/reducers/commerce.reducer';

@Component({
  selector: 'app-commerce-table',
  templateUrl: './commerce-table.component.html',
  styleUrls: ['./commerce-table.component.scss'],
})
export class CommerceTableComponent implements OnInit {
  commerces$: Observable<any[]>;
  displayedColumns: string[] = [
    'product_name',
    'material',
    'department',
    'price',
  ];

  constructor(private store: Store<{ commerce: State }>) {
    this.commerces$ = this.store.select((state) => state.commerce.commerces);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCommerces());
  }
}
