import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfImagesComponent } from './pdf-images.component';

describe('PdfImagesComponent', () => {
  let component: PdfImagesComponent;
  let fixture: ComponentFixture<PdfImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
