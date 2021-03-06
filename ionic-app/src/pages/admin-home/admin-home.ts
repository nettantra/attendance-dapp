import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public menu: MenuController) {
    this.menu.swipeEnable(false);
    /*storage.get('user_type').then((type) => {
      console.log(type);
      if (type != "admin") {
        navCtrl.setRoot('WelcomePage');
      }
    }).catch(function (error) {
      console.log(error);
    })*/

  }

  ionViewDidLoad() {
  }

  /* add employee */
  addEmployee() {
    this.navCtrl.push('EmployeeListPage');
  }

  /* check result */
  checkResult() {
    this.navCtrl.push('AdminCheckResultPage')
  }

  logout() {
    this.storage.remove('user_type').then(() => {
      this.navCtrl.setRoot('WelcomePage');
    }).catch(function (error) {
      console.log(error);
    })
  }

}
