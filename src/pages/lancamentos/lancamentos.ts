import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { colecao_de_modais } from '../../services/factory';

/**
 * Generated class for the LancamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
})
export class LancamentosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public modal:ModalController,public c:colecao_de_modais,public Toast:Toast,public SQLite:SQLite) {
   
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentosPage');
    
  }
  descricao_valor:string;
   valor_item:number;
   salvar_lancamentos(descricao_:string,itens:number){
     var grava = new colecao_de_modais(this.modal,this.Toast,this.SQLite);
     grava.date = new Date().toString();
     grava.item = "";
     grava.valor = itens;
     grava.tipo=descricao_;
     grava.Cadastro_laçamentos();
   }
}
