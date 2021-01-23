import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './parts/checkbox/checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { CheckboxListItemComponent } from './parts/checkbox-list-item/checkbox-list-item.component';
import { ChartComponent } from './parts/chart/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, CheckboxComponent, CheckboxListItemComponent, ChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
