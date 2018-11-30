import { SQLite } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { colecao_de_modais } from '../../services/factory';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public SQLite:SQLite,public modal:ModalController,public c:colecao_de_modais,public to:Toast) {
    
  }
  item:any;
  click_modal(){
    var click =new colecao_de_modais(this.modal,this.to,this.SQLite);
    click.click_modal(this.item);
   console.log(this.item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
   
  }

}
