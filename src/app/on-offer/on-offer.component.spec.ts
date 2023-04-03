import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOfferComponent } from './on-offer.component';

describe('OnOfferComponent', () => {
  let component: OnOfferComponent;
  let fixture: ComponentFixture<OnOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
