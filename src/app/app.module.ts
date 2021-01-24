import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './parts/checkbox/checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxListItemComponent } from './parts/checkbox-list-item/checkbox-list-item.component';
import { ChartComponent } from './parts/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './parts/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageLayoutComponent } from './templates/page-layout/page-layout.component';
import { PopulationCompositionComponent } from './pages/population-composition/population-composition.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    CheckboxListItemComponent,
    ChartComponent,
    HeaderComponent,
    PageLayoutComponent,
    PopulationCompositionComponent,
    InternalServerErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatCardModule,
    ChartsModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
