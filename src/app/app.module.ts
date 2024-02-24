import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommerceTableComponent } from './components/commerce-table/commerce-table.component';
import * as fromCommerce from './store/reducers/commerce.reducer';
import { CommerceEffects } from './store/effects/commerce.effects';

@NgModule({
  declarations: [AppComponent, CommerceTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      [fromCommerce.commerceFeatureKey]: fromCommerce.reducer,
    }),
    EffectsModule.forRoot([CommerceEffects]),
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
