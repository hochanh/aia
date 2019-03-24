import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service = 'http://localhost';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable()
export class StocksService {
  constructor(private http: HttpClient) {}
  get() {
    return stocks.slice();
  }

  add(stock) {
    stocks.push(stock);
    this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot/?symbols=' + symbols.join());
    }
  }
}
