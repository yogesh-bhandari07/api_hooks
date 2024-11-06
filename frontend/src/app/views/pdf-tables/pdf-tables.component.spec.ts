import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTablesComponent } from './pdf-tables.component';

describe('PdfTablesComponent', () => {
  let component: PdfTablesComponent;
  let fixture: ComponentFixture<PdfTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
