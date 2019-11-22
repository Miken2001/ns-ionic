import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slla4Page } from './slla4.page';

describe('Slla4Page', () => {
  let component: Slla4Page;
  let fixture: ComponentFixture<Slla4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slla4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slla4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
