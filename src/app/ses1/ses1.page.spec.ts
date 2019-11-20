import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ses1Page } from './ses1.page';

describe('Ses1Page', () => {
  let component: Ses1Page;
  let fixture: ComponentFixture<Ses1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ses1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ses1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
