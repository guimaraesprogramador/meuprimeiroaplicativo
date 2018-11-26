import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { colecao_de_modais } from '../../services/factory';

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

  constructor(public navCtrl: NavController,public platform:Platform, public navParams: NavParams,public modal:ModalController,public c:colecao_de_modais) {
    if (this.platform.is('cordova')==true) {
      this.c = new colecao_de_modais(this.modal);
      c.abrir_banco_sqllite();
      c.tabelas();
     }
     else{
      console.log("browser não tem sqlite")
    
     }
  }
  click_modal(){
    var click =new colecao_de_modais(this.modal);
    click.click_modal();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
  }

}
