import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { colecao_de_modais } from '../../services/factory';
import {App} from 'ionic-angular';
/**
 * Generated class for the SaldoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-saldo',
  templateUrl: 'saldo.html',
})
export class SaldoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public c:colecao_de_modais,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaldoPage');
  }
  sair(){
    this.navCtrl.pop();
  }
saldo:any[];
}
