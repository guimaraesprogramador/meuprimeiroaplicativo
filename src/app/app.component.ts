
import { Toast } from '@ionic-native/toast';
import { TablesPage } from './../pages/tables/tables';

import { SQLite } from '@ionic-native/sqlite';

import { Component } from '@angular/core';
import { Platform, ViewController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { colecao_de_modais } from '../services/factory';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TablesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, banco:SQLite, sq:colecao_de_modais,Toast:Toast) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     sq.criar_database().then(()=>{
       console.log("tabelas criadas");
     }).catch(e=>console.log(e));
     
    });
  }
}

