import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaestroHomePage } from './maestro-home.page';

describe('MaestroHomePage', () => {
  let component: MaestroHomePage;
  let fixture: ComponentFixture<MaestroHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
