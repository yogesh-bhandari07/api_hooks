import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonValidatorService {
  constructor() {}

  validateJson(jsonString: string): boolean {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (error) {
      return false;
    }
  }
}
