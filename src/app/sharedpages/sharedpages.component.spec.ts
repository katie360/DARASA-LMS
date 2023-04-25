import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedpagesComponent } from './sharedpages.component';

describe('SharedpagesComponent', () => {
  let component: SharedpagesComponent;
  let fixture: ComponentFixture<SharedpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedpagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
