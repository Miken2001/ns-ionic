import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svt3Page } from './svt3.page';

describe('Svt3Page', () => {
  let component: Svt3Page;
  let fixture: ComponentFixture<Svt3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Svt3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svt3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
