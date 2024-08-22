import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationPage } from './authorization.page';

describe('AuthorizationPage', () => {
  let component: AuthorizationPage;
  let fixture: ComponentFixture<AuthorizationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
