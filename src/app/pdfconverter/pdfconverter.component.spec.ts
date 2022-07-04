import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfconverterComponent } from './pdfconverter.component';

describe('PdfconverterComponent', () => {
  let component: PdfconverterComponent;
  let fixture: ComponentFixture<PdfconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfconverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
