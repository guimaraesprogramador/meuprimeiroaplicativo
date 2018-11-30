
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../pages/modal/modal';
import { iadapter } from './iadapter';
import { SQLite,SQLiteObject  } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Injectable, ErrorHandler } from '@angular/core';
@Injectable()
export class colecao_de_modais implements iadapter
{
    
    
  
constructor(public modal:ModalController, public Toast:Toast,public sqls:SQLite)
{
    
}

valor :Number;
date:String;
item:string;
tipo : String;
select_forcedores:object;
abrir_banco_sqllite(): Promise<SQLiteObject> {
    return this.sqls.create({
        name:"contas.db",
        location:'default'
    });
}
itens:any;
click_modal(indificado:any)
{
    let modals = this.modal.create(ModalPage);
    modals.present();
    modals.onDidDismiss(data=>{
        console.log(data);
         indificado= [data.valor,data.datas,data.item,
        data.tipo];
        console.log(indificado);
    })
}
receber_dados(){
}
Cadastra_conta()
{
   
}
Cadastra_controle() 
{
   return this.abrir_banco_sqllite().then(db=>{
        db.executeSql("insert into controle(valor,date,item,tipo) Values(?,?,?,?)",[this.valor,this.date,this.item,this.tipo]).then(resp=>{
               this.Toast.show("Operação sucesso em controle","5000",'center').subscribe(to=>{
                   console.log(resp);
                   console.log(to);
               });
               this.Toast.hide();
        }).catch(e=>console.log(e));
   
   }).catch(e=>console.log(e));
}
Cadastro_laçamentos() 
{
    
        return this.abrir_banco_sqllite().then(db=>{
            db.executeSql("insert into lancamentos(valor,date,item,tipo) Values(?,?,?,?)",[this.valor,this.date,this.item,this.tipo]).then(resp=>{
                   this.Toast.show("Operação sucesso em laçamentos","5000",'center').subscribe(to=>{
                       console.log(resp);
                       console.log(to);
                   })
                   this.Toast.hide();
       }).catch(e=>console.log(e));
    
}).catch(e=>console.log(e));
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
criar_database(){
    return this.abrir_banco_sqllite().then((Db:SQLiteObject)=>{
        this.tabelas(Db);
    }).catch(e=>console.log(e));
}
tabelas(db:SQLiteObject){
   
    db.executeSql("Create table if not exists conta(valor double precision not null,"+
    "date text not null,item text not null,tipo text not null)",[]).then(resp=>{
    }).catch(e=>console.log(e));
    db.executeSql("Create table if not exists lancamentos(valor double precision not null,"+
    "date text not null,item text not null,tipo text not null)",[]).then(resp=>{
    }).catch(e=>console.log(e));
    db.executeSql("Create table if not exists controle(valor double precision not null,"+
    "date text not null,item text not null,tipo text not null)",[]).then(resp=>{
    }).catch(e=>console.log(e))
    }
select_fornecedores(db:SQLiteObject){
  
    db.executeSql("select tipo,valor from lancamentos",[]).then((resp:any)=>{
        console.log(resp)
        let tipos:any = [];
        for(var i = 0;i<resp.rows.length;i++){
            var tipo = resp.rows.item(i);
            tipos.push(tipo);
        }
        this.select_forcedores = tipos;
        console.log(this.select_forcedores);
        return this.select_forcedores;
    }).catch(e=>console.log(e));
  
        
    }
}