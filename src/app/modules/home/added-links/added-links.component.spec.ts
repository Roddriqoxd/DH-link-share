import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedLinksComponent } from './added-links.component';

describe('AddedLinksComponent', () => {
  let component: AddedLinksComponent;
  let fixture: ComponentFixture<AddedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddedLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
