import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Smp4Page } from './smp4.page';

describe('Smp4Page', () => {
  let component: Smp4Page;
  let fixture: ComponentFixture<Smp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Smp4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Smp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
