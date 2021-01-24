import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationCompositionComponent } from './population-composition.component';

describe('PopulationCompositionComponent', () => {
  let component: PopulationCompositionComponent;
  let fixture: ComponentFixture<PopulationCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationCompositionComponent ]
    })
    .compileComponents();
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
