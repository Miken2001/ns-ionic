import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Svt1Page } from './svt1.page';

describe('Svt1Page', () => {
  let component: Svt1Page;
  let fixture: ComponentFixture<Svt1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Svt1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Svt1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
