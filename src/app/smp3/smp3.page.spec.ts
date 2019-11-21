import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Smp3Page } from './smp3.page';

describe('Smp3Page', () => {
  let component: Smp3Page;
  let fixture: ComponentFixture<Smp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Smp3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Smp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
