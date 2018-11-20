

import { colecao_de_modais } from './../../services/factory';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,public modal:ModalController,public platform:Platform,public c:colecao_de_modais) {
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
}
