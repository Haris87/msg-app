import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  coins:any = [
    new Coin('Bitcoin'),
    new Coin('Ethereum'),
    new Coin('Ripple'),
    new Coin('Stellar Lumens'),
    new Coin('Litecoin'),
    new Coin('Ethereum Classic')
  ];

}

class Coin {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
