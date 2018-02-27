import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  coins:any = [
    new Coin('Bitcoin', 'BTC', 9230),
    new Coin('Ethereum', 'ETH', 956),
    new Coin('Litecoin', 'LTC', 153),
    new Coin('Ripple', 'XRP', 0.03),
    new Coin('Ethereum Classic', 'ETC', 176),
    new Coin('Stellar Lumens', 'XLM', 0.43)
  ];

  popup(message){
    let alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}

class Coin {
    name: string;
    abbreviation: string;
    price: number;
    constructor(name: string, abbr: string, price: number) {
        this.name = name;
        this.abbreviation = abbr;
        this.price = price;
    }
}
