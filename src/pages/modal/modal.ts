import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { colecao_de_modais } from '../../services/factory';
import {App} from 'ionic-angular';
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
     
        
        let index_tipo = this.navParams.get("index");
        console.log(index_tipo);
        
        if(index_tipo ==undefined){
          c.select_lancamentos().then((db:any[])=>{
            this.s = db;
          
        }).catch(e=>console.log(e));
          
        }
        else{
          this.isenabled = false;
          c.manutenção_controle(index_tipo).then((db:any[])=>{
            this.numero = db[0].valor;
              this.descricao = db[0].date;
              this.atual = db[0].item;
          }).catch(e=>console.log(e));

        }
  }
  s:any[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    
  }
 
  isenabled:boolean=true;
  atual:Date=new Date();
  numero:number;
  descricao:string;
  valor_tipo:String;
  sair(){
     this.modal_vi.dismiss();
  }
  salvar_dados(valor:number, data:string,item:string, tipo:string){
    if(this.navParams.get("index")== undefined){
      var ca = new colecao_de_modais(this.modal,this.to, this.SQLite,this.app);
      ca.valor = valor;
      ca.date = data;
      ca.item = item;
      ca.tipo = tipo;
      ca.Cadastra_controle();
      this.modal_vi.dismiss();
    }
    //update
    else{
      var c = new colecao_de_modais(this.modal,this.to, this.SQLite,this.app);
      c.valor = valor;
      c.date = data;
      c.item = item;
      c.tipo = tipo;
      c.update_controle();
      this.modal_vi.dismiss();
    }
   
  }
  deletar(){
    let index = this.navParams.get("index");
    if(index !=undefined){
      var c = new colecao_de_modais(this.modal,this.to, this.SQLite,this.app);
      c.delete(index);
      this.navCtrl.pop();
    }
  }
}
