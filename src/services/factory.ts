import { ContasPage } from './../pages/contas/contas';

import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ModalPage } from '../pages/modal/modal';
import { iadapter } from './iadapter';
import { SQLite,SQLiteObject  } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Injectable} from '@angular/core';

@Injectable()
export class colecao_de_modais implements iadapter
{
    [x: string]: any;
    
    
    controle_array:any[];
constructor(public modal:ModalController, public Toast:Toast,public sqls:SQLite, private nvd:NavController)
{
    
}

valor :Number;
date:String;
item:string;
tipo : String;
abrir_banco_sqllite(): Promise<SQLiteObject> {
    return this.sqls.create({
        name:"contas.db",
        location:'default'
    });
}
itens:any;
click_modal()
{
    let modals = this.modal.create(ModalPage);
    modals.present();
   
}
modal_controle(index_item:number){
    this.nvd.push(ContasPage,{index:index_item}).then(()=>{
        this.Toast.show("acesso a editar sucesso em lancamentos","5000",'center').subscribe(to=>{
            console.log(to);
        });
        this.Toast.hide();
    })

}
select_controle(){
  
   return this.abrir_banco_sqllite().then((db:SQLiteObject)=>{
       return db.executeSql("select * from controle",[]).then((resp:any)=>{
            let tudo:any = [];
            for(var i = 0;i<resp.rows.length;i++){
                var todos_elementos = resp.rows.item(i);
                tudo.push(todos_elementos);
            }
            
            this.controle_array = tudo;
            return this.controle_array;
        }).catch(e=>console.log(e));
    }).catch(e=>console.log(e));
   
  
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
manutenção_controle(i:number) 
{
    return this.abrir_banco_sqllite().then((dbs:SQLiteObject)=>{
        console.log(dbs);
        return dbs.executeSql("select * from lancamentos where insertRow = ?",[i]).then((resp:any)=>{
            let tipos:any = [];
            for(var i = 0;i<resp.rows.length;i++){
                var tipo = resp.rows.item(i);
                tipos.push(tipo);
            }
            return tipos;
            
         }).catch(e=>console.log(e));
     }).catch(e=>console.log(e));
}
abre_modal(){
    let modalis = this.modal.create(ModalPage);
    modalis.present();
}
Manutenção_laçamentos()
{
    
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
select_lancamentos(){
    return this.abrir_banco_sqllite().then((db:SQLiteObject)=>{
   return db.executeSql("select tipo,valor from lancamentos",[]).then((resp:any)=>{
        let tipos:any = [];
        for(var i = 0;i<resp.rows.length;i++){
            var tipo = resp.rows.item(i);
            tipos.push(tipo);
        }
        return tipos;
    }).catch(e=>console.log(e));
}).catch(e=>console.log(e));
        
    }
};