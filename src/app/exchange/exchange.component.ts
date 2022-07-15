import { Component } from '@angular/core';
import { CurrencyapidataService } from '../currencyapidata.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent {
  currJson: any = [];
  amount: any;

  base = 'USD';
  cont2 = 'UAH';
  result: string = 'choose currency';
  result2: any;

  changeBase(a: string) {
    this.base = a;
  }
  toCountry(b: string) {
    this.cont2 = b;
  }
  constructor(private currency: CurrencyapidataService) {}

  convert() {
    this.currency.getCurrencyData().subscribe((data) => {
      this.currJson = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJson);

      if (this.cont2 == 'GBP') {
        this.result = this.currJson.rates.GBP.toFixed(2);
        this.result2 = this.currJson.rates.GBP.toFixed(2) * this.amount;
      }
      if (this.cont2 == 'UAH') {
        this.result = this.currJson.rates.UAH.toFixed(2);
        this.result2 = this.currJson.rates.UAH.toFixed(2) * this.amount;
      }
      if (this.cont2 == 'EUR') {
        this.result = this.currJson.rates.EUR.toFixed(2);
        this.result2 = this.currJson.rates.EUR.toFixed(2) * this.amount;
      }
    });
  }
}
