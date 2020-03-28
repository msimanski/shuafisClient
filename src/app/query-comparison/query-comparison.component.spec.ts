import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryComparisonComponent } from './query-comparison.component';

describe('QueryComparisonComponent', () => {
  let component: QueryComparisonComponent;
  let fixture: ComponentFixture<QueryComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
