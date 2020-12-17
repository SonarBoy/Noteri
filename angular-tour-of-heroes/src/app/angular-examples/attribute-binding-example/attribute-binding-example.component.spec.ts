import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingExampleComponent } from './attribute-binding-example.component';

describe('AttributeBindingExampleComponent', () => {
  let component: AttributeBindingExampleComponent;
  let fixture: ComponentFixture<AttributeBindingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeBindingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
