import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slla2Page } from './slla2.page';

describe('Slla2Page', () => {
  let component: Slla2Page;
  let fixture: ComponentFixture<Slla2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slla2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slla2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
