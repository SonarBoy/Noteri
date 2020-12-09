import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlExamplesComponent } from './html-examples.component';

describe('HtmlExamplesComponent', () => {
  let component: HtmlExamplesComponent;
  let fixture: ComponentFixture<HtmlExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
