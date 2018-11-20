
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../pages/modal/modal';
import { iadapter } from './iadapter';
import { SQLite,SQLiteObject  } from '@ionic-native/sqlite';
import {  Injectable } from '@angular/core';
@Injectable()
export class colecao_de_modais implements iadapter
{
    
    sqls:SQLite= new SQLite();

  
constructor(public modal:ModalController)
{
    
}
valor :Number;
date:String;
item:string;
tipo : String;
abrir_banco_sqllite(): Promise<SQLiteObject> {
    var s = this.sqls.create({
        name:"contas.db",
        location:"default"
    });
    s.then(()=>{
       alert("acesso a banco");
    })
    return s;
}
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
tabelas(){
    this.abrir_banco_sqllite().then(db=>{
        db.executeSql("Create table if not exists conta(valor double precision not null,"+
        "date text not null,item text not null,tipo text not null",[]).then(resp=>{
            console.log(resp);
        })
        db.executeSql("Create table if not exists lancamentos(valor double precision not null,"+
        "date text not null,item text not null,tipo text not null",[]).then(resp=>{
            console.log(resp);
        })
        db.executeSql("Create table if not exists controle(valor double precision not null,"+
        "date text not null,item text not null,tipo text not null",[]).then(resp=>{
            console.log(resp);
        })
    })
}
}
