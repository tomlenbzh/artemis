import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageNotFoundComponent } from './app-page-not-found.component';

describe('AppPageNotFoundComponent', () => {
  let component: AppPageNotFoundComponent;
  let fixture: ComponentFixture<AppPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
