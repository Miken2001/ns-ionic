import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ses3Page } from './ses3.page';

describe('Ses3Page', () => {
  let component: Ses3Page;
  let fixture: ComponentFixture<Ses3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ses3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ses3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
