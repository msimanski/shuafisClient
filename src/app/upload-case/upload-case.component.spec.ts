import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCaseComponent } from './upload-case.component';

describe('UploadCaseComponent', () => {
  let component: UploadCaseComponent;
  let fixture: ComponentFixture<UploadCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
