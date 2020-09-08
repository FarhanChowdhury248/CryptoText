/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MorseComponent } from './morse.component';

describe('MorseComponent', () => {
  let component: MorseComponent;
  let fixture: ComponentFixture<MorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
