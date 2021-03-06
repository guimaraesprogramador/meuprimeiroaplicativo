import { SaldoPage } from './../pages/saldo/saldo'
import { Toast } from '@ionic-native/toast';
import { TablesPageModule } from './../pages/tables/tables.module';
import { SQLite } from '@ionic-native/sqlite';

import { ModalPage } from './../pages/modal/modal';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ViewController, NavController, ModalController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { colecao_de_modais } from '../services/factory';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TablesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    colecao_de_modais, SQLite,Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
