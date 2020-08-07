import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularExamplesComponent } from './angular-examples.component';

describe('AngularExamplesComponent', () => {
  let component: AngularExamplesComponent;
  let fixture: ComponentFixture<AngularExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
