/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImitationComponent } from './imitation.component';

describe('ImitationComponent', () => {
  let component: ImitationComponent;
  let fixture: ComponentFixture<ImitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
