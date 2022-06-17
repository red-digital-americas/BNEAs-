import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGeneralConfimationComponent } from './dialog-general-confimation.component';

describe('DialogGeneralConfimationComponent', () => {
  let component: DialogGeneralConfimationComponent;
  let fixture: ComponentFixture<DialogGeneralConfimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGeneralConfimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGeneralConfimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
