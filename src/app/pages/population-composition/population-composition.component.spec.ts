import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from 'src/app/parts/chart/chart.component';
import { CheckboxListItemComponent } from 'src/app/parts/checkbox-list-item/checkbox-list-item.component';
import { CheckboxComponent } from 'src/app/parts/checkbox/checkbox.component';
import { HeaderComponent } from 'src/app/parts/header/header.component';
import { PageLayoutComponent } from 'src/app/templates/page-layout/page-layout.component';

import { PopulationCompositionComponent } from './population-composition.component';

describe('PopulationCompositionComponent', () => {
  let component: PopulationCompositionComponent;
  let fixture: ComponentFixture<PopulationCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CheckboxComponent,
        CheckboxListItemComponent,
        ChartComponent,
        HeaderComponent,
        PageLayoutComponent,
        PopulationCompositionComponent,
      ],
      imports: [
        FormsModule,
        MatCheckboxModule,
        MatCardModule,
        ChartsModule,
        HttpClientModule,
        MatToolbarModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
