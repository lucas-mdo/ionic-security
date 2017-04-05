import { Component/*, Input*/ } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

//import { Md5 } from 'ts-md5/dist/md5';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  /*@Input()*/ email : string;
  /*@Input()*/ password : string;
  private _storage : SecureStorageObject;

  constructor(public toastCtrl: ToastController, public secureStorage: SecureStorage, public navCtrl: NavController) {
    this.secureStorage.create('my_store_name')
      .then((storage: SecureStorageObject) => this._storage = storage);
  }

  presentToast(myMessage:string) {
    let toast = this.toastCtrl.create({
      message: myMessage,
      duration: 3000
    });
    toast.present();
  }

    dismissableToast(myMessage:string) {
    let toast = this.toastCtrl.create({
      message: myMessage,
      showCloseButton: true
    });
    toast.present();
  }

  onLogin() {
    //Salvar

    //Sem criptografia
    //localStorage.setItem('email', this.email);
    //localStorage.setItem('password', this.password);

    //MD5
    //var hashed_email = Md5.hashStr(this.email, false).toString();
    //localStorage.setItem('email_md5', hashed_email);
    //var hashed_pass = Md5.hashStr(this.password, false).toString();
    //localStorage.setItem('password_md5', hashed_pass);

    //Secure Storage 
    this._storage.set('email', this.email);
    this._storage.set('password', this.password);

    this.presentToast('Data stored successfully!');
  }

  onGetInfo() {
      //var tempEmail = localStorage.getItem('email_md5');
      //var tempPass = localStorage.getItem('password_md5');     

      var tempEmail = this._storage.get('email');
      var tempPass = this._storage.get('password');

      this.dismissableToast('Email: ' + tempEmail + '\nPassword: ' + tempPass);
  }
  
}
