import { colecao_de_modais } from './../../services/factory';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modal:ModalController) {
  }
  click_modal(){
    var click =new colecao_de_modais(this.modal);
    click.click_modal();
  }
}
