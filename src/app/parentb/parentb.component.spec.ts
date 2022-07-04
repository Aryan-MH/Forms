import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbComponent } from './parentb.component';

describe('ParentbComponent', () => {
  let component: ParentbComponent;
  let fixture: ComponentFixture<ParentbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
