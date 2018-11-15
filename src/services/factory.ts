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
