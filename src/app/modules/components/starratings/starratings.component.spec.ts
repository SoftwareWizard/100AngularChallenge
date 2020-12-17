import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarratingsComponent } from './starratings.component';

describe('StarratingsComponent', () => {
  let component: StarratingsComponent;
  let fixture: ComponentFixture<StarratingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarratingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarratingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
