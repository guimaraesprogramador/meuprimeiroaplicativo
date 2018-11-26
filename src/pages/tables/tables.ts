import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TablesPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tables',
  templateUrl: 'tables.html'
})
export class TablesPage {

  contasRoot = 'ContasPage'
  lancamentosRoot = 'LancamentosPage'
  constructor(public navCtrl: NavController) {}

}
