import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBneaComponent } from './create-bnea.component';

describe('CreateBneaComponent', () => {
  let component: CreateBneaComponent;
  let fixture: ComponentFixture<CreateBneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBneaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
