import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public modal:ModalController,public c:colecao_de_modais,public to:Toast) {
    
  }
  click_modal(){
    var click =new colecao_de_modais(this.modal,this.to);
    click.click_modal();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
   
  }

}
