import { ModalController } from 'ionic-angular';
import { ModalPage } from '../pages/modal/modal';
import { iadapter } from './iadapter';
export class colecao_de_modais implements iadapter
{

  
constructor(public modal:ModalController)
{
 
    
}
id:Number;
valor :Number;
date:String;
item:string;
tipo : String;
click_modal()
{
    var modals = this.modal.create(ModalPage);
    modals.present();
}
Cadastra_conta() 
{
    throw new Error("Method not implemented.");
}
Cadastra_controle() 
{
    throw new Error("Method not implemented.");
}
Cadastro_laçamentos() 
{
    throw new Error("Method not implemented.");
}
manutenção_conta() 
{
    throw new Error("Method not implemented.");
}
manutenção_controle() 
{
    throw new Error("Method not implemented.");
}
Manutenção_laçamentos()
{
    throw new Error("Method not implemented.");
}
}
