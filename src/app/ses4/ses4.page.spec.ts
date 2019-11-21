import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ses4Page } from './ses4.page';

describe('Ses4Page', () => {
  let component: Ses4Page;
  let fixture: ComponentFixture<Ses4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ses4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ses4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
