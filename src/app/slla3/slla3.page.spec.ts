import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slla3Page } from './slla3.page';

describe('Slla3Page', () => {
  let component: Slla3Page;
  let fixture: ComponentFixture<Slla3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slla3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slla3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
