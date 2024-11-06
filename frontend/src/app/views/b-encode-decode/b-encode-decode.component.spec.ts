import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEncodeDecodeComponent } from './b-encode-decode.component';

describe('BEncodeDecodeComponent', () => {
  let component: BEncodeDecodeComponent;
  let fixture: ComponentFixture<BEncodeDecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEncodeDecodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BEncodeDecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
