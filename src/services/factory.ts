import { ModalController} from 'ionic-angular';
import { ModalPage } from '../pages/modal/modal';
export class colecao_de_modais{
constructor(public modal:ModalController){

}
click_modal(){
    var modals = this.modal.create(ModalPage);
    modals.present();
}

}