

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
    
  }
  
}
