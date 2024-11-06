import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AesEncryptDecryptComponent } from './aes-encrypt-decrypt.component';

describe('AesEncryptDecryptComponent', () => {
  let component: AesEncryptDecryptComponent;
  let fixture: ComponentFixture<AesEncryptDecryptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AesEncryptDecryptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AesEncryptDecryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
