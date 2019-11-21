import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Smp1Page } from './smp1.page';

describe('Smp1Page', () => {
  let component: Smp1Page;
  let fixture: ComponentFixture<Smp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Smp1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Smp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
