import { Component } from '@angular/core';
import { ExchangeService } from 'src/app/exchange.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  data: any;
  data1: any
  constructor(private exchange: ExchangeService) {
    this.exchange.getCurrency().subscribe((data) => {
      if (Array.isArray(data)) {
        this.data = data.filter((res) => res.ccy == 'USD');
      }
    });
    this.exchange.getCurrency().subscribe((data1) => {
      if (Array.isArray(data1)) {
        this.data1 = data1.filter((res) => res.ccy == 'EUR');
      }
    });
  }
}
