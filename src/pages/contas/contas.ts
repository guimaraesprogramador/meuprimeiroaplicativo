import { colecao_de_modais } from './../../services/factory';
import { SQLite } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the ContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contas',
  templateUrl: 'contas.html',
})
export class ContasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public SQLite:SQLite,public modal:ModalController,public c:colecao_de_modais,public to:Toast) {
   this.listar();
  }
  itens:any[];
  click_modal_controle(){
    var click =new colecao_de_modais(this.modal,this.to,this.SQLite, this.app);
    click.click_modal();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContasPage');
    this.listar();

  }
  click_modal_alterar_controle(){
    let click_modal_alterar_controle = new colecao_de_modais(this.modal,this.to,this.SQLite, this.app);
    click_modal_alterar_controle.abre_modal();
  }
  listar(){
    var ca = new colecao_de_modais(this.modal,this.to,this.SQLite,this.app);
    ca.select_controle().then((db:any[])=>{
      if(db == undefined){
        this.itens = ["nenhum valor"];
      }
      this.itens = db;
    }).catch(e=>console.log(e));
    
  }
  ionViewDidEnter(){
this.listar();
  }
  modificar_valor_controle(index:any){
    var ca = new colecao_de_modais(this.modal,this.to,this.SQLite,this.app);
    ca.modal_controle(index);
  }
  saldo(){
    var ca = new colecao_de_modais(this.modal,this.to,this.SQLite,this.app);
    ca.abre_modal_Saldo();
  }
}
