import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svt4Page } from './svt4.page';

describe('Svt4Page', () => {
  let component: Svt4Page;
  let fixture: ComponentFixture<Svt4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Svt4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svt4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
