
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../pages/modal/modal';
import { iadapter } from './iadapter';
import { SQLite,SQLiteObject  } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Injectable, ErrorHandler } from '@angular/core';
@Injectable()
export class colecao_de_modais implements iadapter
{
    
    sqls:SQLite= new SQLite();

  
constructor(public modal:ModalController, public Toast:Toast)
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
    return s;
}
click_modal()
{
    var modals = this.modal.create(ModalPage);
    modals.present();
}

Cadastra_conta()
{
   
}
Cadastra_controle() 
{
    this.abrir_banco_sqllite().then(db=>{
        db.executeSql("insert into controle(valor,data,item,tipo) Values(?,?,?,?)",[this.valor,this.date,this.item,this.tipo]).then(resp=>{
               this.Toast.show("Operação sucesso em controle","5000",'bottom').subscribe(to=>{
                   console.log(resp);
                   console.log(to);
               });
               
        });
   
   })
}
Cadastro_laçamentos() 
{
    
        this.abrir_banco_sqllite().then(db=>{
            db.executeSql("insert into lancamentos(valor,data,item,tipo) Values(?,?,?,?)",[this.valor,this.date,this.item,this.tipo]).then(resp=>{
                   this.Toast.show("Operação sucesso em laçamentos","5000",'center').subscribe(to=>{
                       console.log(resp);
                       console.log(to);
                   });
       })
    
});
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
