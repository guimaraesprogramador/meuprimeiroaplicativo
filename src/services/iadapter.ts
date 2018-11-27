
import { SQLiteObject } from '@ionic-native/sqlite';

export interface iadapter 
{
    Cadastra_conta(valor:number, data:string,item:string, tipo:string)
    Cadastra_controle()
    Cadastro_laçamentos()
    manutenção_conta()
    manutenção_controle()
    Manutenção_laçamentos()
    valor :Number;
     date:String;
     item:string;
     tipo : String;
     tabelas()
     abrir_banco_sqllite():Promise<SQLiteObject>;
}
