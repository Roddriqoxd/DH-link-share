import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartedMessageComponent } from './started-message.component';

describe('StartedMessageComponent', () => {
  let component: StartedMessageComponent;
  let fixture: ComponentFixture<StartedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartedMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
