import { Component/*, Input*/ } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login2',
  templateUrl: 'login.html'
})
export class Login2Page {

  /*@Input()*/ email : string;
  /*@Input()*/ password : string;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController) {
       
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
    localStorage.setItem('email', this.email);     
    localStorage.setItem('password', this.password);     
    this.presentToast('Data stored successfully!');
  }

  onGetInfo() {
      var tempEmail = localStorage.getItem('email');
      var tempPass = localStorage.getItem('password');       
      this.dismissableToast('Email: ' + tempEmail + '\nPassword: ' + tempPass);
  }
}
