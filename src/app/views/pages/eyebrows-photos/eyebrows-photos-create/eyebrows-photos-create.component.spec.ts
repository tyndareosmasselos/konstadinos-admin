/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EyebrowsPhotosCreateComponent } from './eyebrows-photos-create.component';

describe('EyebrowsPhotosCreateComponent', () => {
  let component: EyebrowsPhotosCreateComponent;
  let fixture: ComponentFixture<EyebrowsPhotosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyebrowsPhotosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyebrowsPhotosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
