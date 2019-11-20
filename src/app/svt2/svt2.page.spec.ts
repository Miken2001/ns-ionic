import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svt2Page } from './svt2.page';

describe('Svt2Page', () => {
  let component: Svt2Page;
  let fixture: ComponentFixture<Svt2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Svt2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svt2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
