import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesseractTestComponent } from './tesseract-test.component';

describe('TesseractTestComponent', () => {
  let component: TesseractTestComponent;
  let fixture: ComponentFixture<TesseractTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesseractTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesseractTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
