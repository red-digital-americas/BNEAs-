import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBneaAdminComponent } from './create-bnea-admin.component';

describe('CreateBneaAdminComponent', () => {
  let component: CreateBneaAdminComponent;
  let fixture: ComponentFixture<CreateBneaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBneaAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBneaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
