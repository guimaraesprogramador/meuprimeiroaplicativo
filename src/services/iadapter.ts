
import { SQLiteObject } from '@ionic-native/sqlite';

export interface iadapter 
{
    Cadastra_conta()
    Cadastra_controle()
    Cadastro_laçamentos()
    manutenção_conta()
    manutenção_controle()
    Manutenção_laçamentos()
    valor :Number;
     date:String;
     item:string;
     tipo : String;
     select_forcedores:any;
     itens:any;
     tabelas(db:SQLiteObject)
     abrir_banco_sqllite():Promise<SQLiteObject>;
     criar_database();
     select_fornecedores(db:SQLiteObject);
     receber_dados();
}
