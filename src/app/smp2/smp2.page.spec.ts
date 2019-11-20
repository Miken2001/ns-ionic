import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Smp2Page } from './smp2.page';

describe('Smp2Page', () => {
  let component: Smp2Page;
  let fixture: ComponentFixture<Smp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Smp2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Smp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
