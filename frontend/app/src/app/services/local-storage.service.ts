import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private secretKey: string = environment.secretKey;

  setItem(key: string, value: any): void {
    const encryptedValue = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      this.secretKey
    ).toString();
    localStorage.setItem(key, encryptedValue);
  }

  getItem(key: string): any {
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
      const bytes = CryptoJS.AES.decrypt(encryptedValue, this.secretKey);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return null;
  }

  removeItem(key: string): void {
    const encryptedKey = CryptoJS.AES.encrypt(key, this.secretKey).toString();
    localStorage.removeItem(encryptedKey);
  }
}
