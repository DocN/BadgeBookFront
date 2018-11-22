import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginPortalComponent } from './app-login-portal.component';

describe('AppLoginPortalComponent', () => {
  let component: AppLoginPortalComponent;
  let fixture: ComponentFixture<AppLoginPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoginPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
