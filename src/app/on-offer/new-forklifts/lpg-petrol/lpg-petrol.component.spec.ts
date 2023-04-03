import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpgPetrolComponent } from './lpg-petrol.component';

describe('LpgPetrolComponent', () => {
  let component: LpgPetrolComponent;
  let fixture: ComponentFixture<LpgPetrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LpgPetrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LpgPetrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
