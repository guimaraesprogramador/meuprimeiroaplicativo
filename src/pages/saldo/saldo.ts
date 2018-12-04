import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App} from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { colecao_de_modais } from '../../services/factory';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public SQLite:SQLite,public modal:ModalController,public c:colecao_de_modais,public to:Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaldoPage');
  }
Contar_valor(){
  var c = new colecao_de_modais(this.modal,this.to,this.SQLite,this.app);
  c.contar_saldo().then((count:any[])=>{
    this.saldo = count;
  }).catch(e=>console.log(e));
}
saldo:any[];
ionViewDidEnter(){
 this.Contar_valor();
}
}
