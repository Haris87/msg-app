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
    new Coin('Bitcoin', 'BTC', 9230, 0.012),
    new Coin('Ethereum', 'ETH', 956, 1.87),
    new Coin('Litecoin', 'LTC', 153, 2.3445),
    new Coin('Ripple', 'XRP', 0.03, 1030.4),
    new Coin('Ethereum Classic', 'ETC', 176, 0),
    new Coin('Stellar Lumens', 'XLM', 0.43, 0)
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
    num: number;
    constructor(name: string, abbr: string, price: number, num: number) {
        this.name = name;
        this.abbreviation = abbr;
        this.price = price;
        this.num = num;
    }

    value(){
      return (this.num * this.price).toFixed(3);
    }
}
