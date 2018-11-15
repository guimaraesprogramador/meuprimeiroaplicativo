import { ModalController } from 'ionic-angular';
import { ModalPage } from '../pages/modal/modal';
import { iadapter } from './iadapter';
export class colecao_de_modais implements iadapter
{
    
   public id:Number;
    public valor :Number;
    public date:String;
    public item:string;
    public tipo : String;
constructor(public modal:ModalController)
{
 
    
}
click_modal()
{
    var modals = this.modal.create(ModalPage);
    modals.present();
}
Cadastra_conta() {
    throw new Error("Method not implemented.");
}
Cadastra_controle() {
    throw new Error("Method not implemented.");
}
Cadastro_laçamentos() {
    throw new Error("Method not implemented.");
}
manutenção_conta() {
    throw new Error("Method not implemented.");
}
manutenção_controle() {
    throw new Error("Method not implemented.");
}
Manutenção_laçamentos() {
    throw new Error("Method not implemented.");
}