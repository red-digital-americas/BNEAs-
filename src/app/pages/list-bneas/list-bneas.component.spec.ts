import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBNEASComponent } from './list-bneas.component';

describe('ListBNEASComponent', () => {
  let component: ListBNEASComponent;
  let fixture: ComponentFixture<ListBNEASComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBNEASComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBNEASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
