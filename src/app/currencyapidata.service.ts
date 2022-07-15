import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyapidataService {
  constructor(private http: HttpClient) {}

  getCurrencyData() {
    let url =
      'https://openexchangerates.org/api/latest.json?app_id=e8cdcc8e6fcc4b5ea27d83b84af8c668';
    return this.http.get(url);
  }
}
