import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBneasAdminComponent } from './list-bneas-admin.component';

describe('ListBneasAdminComponent', () => {
  let component: ListBneasAdminComponent;
  let fixture: ComponentFixture<ListBneasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBneasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBneasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
