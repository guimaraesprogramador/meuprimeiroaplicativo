import { ModalPage } from './../modal/modal';
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
    let modals = this.modal.create(ModalPage);
    modals.present();
  }
}
