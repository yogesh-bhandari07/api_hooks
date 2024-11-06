import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfResizerComponent } from './pdf-resizer.component';

describe('PdfResizerComponent', () => {
  let component: PdfResizerComponent;
  let fixture: ComponentFixture<PdfResizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfResizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
