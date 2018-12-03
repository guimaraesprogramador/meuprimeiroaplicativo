
import { SQLiteObject } from '@ionic-native/sqlite';

export interface iadapter 
{
    Cadastra_conta()
    Cadastra_controle()
    Cadastro_laçamentos()
    manutenção_conta()
    manutenção_controle(i:number)
   
    valor :Number;
     date:String;
     item:string;
     tipo : String;
     controle_array:any[];
     tabelas(db:SQLiteObject)
     abrir_banco_sqllite():Promise<SQLiteObject>;
     criar_database();
     select_lancamentos();
     select_controle();
    modal_controle(index_item:number);
    abre_modal();
}
