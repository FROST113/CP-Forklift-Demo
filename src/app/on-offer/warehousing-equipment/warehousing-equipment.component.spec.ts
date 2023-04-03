import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousingEquipmentComponent } from './warehousing-equipment.component';

describe('WarehousingEquipmentComponent', () => {
  let component: WarehousingEquipmentComponent;
  let fixture: ComponentFixture<WarehousingEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousingEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousingEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
