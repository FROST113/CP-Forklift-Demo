import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewForkliftsComponent } from './new-forklifts.component';

describe('NewForkliftsComponent', () => {
  let component: NewForkliftsComponent;
  let fixture: ComponentFixture<NewForkliftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewForkliftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewForkliftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
