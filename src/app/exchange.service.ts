import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export type APIRateType = {
  map: any;
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
};
export type RateType = {
  ccy: string;
  base_ccy: string;
  buy: number;
  sale: number;
};

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}
  getCurrency(): Observable<RateType[]> {
    let url =
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
    return this.http.get<APIRateType>(url).pipe(
      map((arrayRateFromAPI) =>
        arrayRateFromAPI.map((rateFromAPI: RateType) => ({
          ccy: rateFromAPI.ccy,
          base_ccy: rateFromAPI.base_ccy,
          buy: Number(rateFromAPI.buy).toFixed(2),
          sale: Number(rateFromAPI.sale).toFixed(2),
        }))
      )
    );
  }
}
