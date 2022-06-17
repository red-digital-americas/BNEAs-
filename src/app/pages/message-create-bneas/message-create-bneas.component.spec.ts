import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCreateBneasComponent } from './message-create-bneas.component';

describe('MessageCreateBneasComponent', () => {
  let component: MessageCreateBneasComponent;
  let fixture: ComponentFixture<MessageCreateBneasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageCreateBneasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCreateBneasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
