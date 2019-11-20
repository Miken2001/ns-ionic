import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slla1Page } from './slla1.page';

describe('Slla1Page', () => {
  let component: Slla1Page;
  let fixture: ComponentFixture<Slla1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slla1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slla1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
