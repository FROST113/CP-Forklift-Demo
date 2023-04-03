import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefurbishedComponent } from './refurbished.component';

describe('RefurbishedComponent', () => {
  let component: RefurbishedComponent;
  let fixture: ComponentFixture<RefurbishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefurbishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefurbishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
