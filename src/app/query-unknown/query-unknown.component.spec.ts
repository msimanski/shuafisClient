import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryUnknownComponent } from './query-unknown.component';

describe('QueryUnknownComponent', () => {
  let component: QueryUnknownComponent;
  let fixture: ComponentFixture<QueryUnknownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryUnknownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
