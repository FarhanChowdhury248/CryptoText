/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnigmaComponent } from './enigma.component';

describe('EnigmaComponent', () => {
  let component: EnigmaComponent;
  let fixture: ComponentFixture<EnigmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnigmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
