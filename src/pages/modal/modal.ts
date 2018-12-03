import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { colecao_de_modais } from '../../services/factory';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public SQLite:SQLite, public modal_vi:ViewController
    ,public c:colecao_de_modais,public modal:ModalController,public to:Toast) {
     
        c.select_lancamentos().then((db:any[])=>{
            this.s = db;
          
        }).catch(e=>console.log(e));
  }
  s:any[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    
  }
  atual:Date=new Date();
  numero:number;
  descricao:string;
  valor_tipo:String;
  sair(){
     this.modal_vi.dismiss();
  }
  salvar_dados(valor:number, data:string,item:string, tipo:string){
    var ca = new colecao_de_modais(this.modal,this.to, this.SQLite);
    ca.valor = valor;
    ca.date = data;
    ca.item = item;
    ca.tipo = tipo;
    ca.Cadastra_controle();
    this.modal_vi.dismiss({valor:ca.valor,datas:ca.date,itens:ca.item,
    tipo:ca.tipo});
  }
}
