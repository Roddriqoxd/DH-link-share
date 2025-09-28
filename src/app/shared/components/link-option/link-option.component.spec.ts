import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkOptionComponent } from './link-option.component';

describe('LinkOptionComponent', () => {
  let component: LinkOptionComponent;
  let fixture: ComponentFixture<LinkOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
