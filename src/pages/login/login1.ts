import { Component/*, Input*/ } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'page-login2',
  templateUrl: 'login.html'
})
export class Login1Page {

  /*@Input()*/ email : string;
  /*@Input()*/ password : string;

  constructor(public toastCtrl: ToastController, public storage: Storage, public navCtrl: NavController) {
       
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
    this.storage.ready().then(() => {

      // SEPARATE VALUES IMPLEMENTATION
      // this.storage.set('email', this.email);
      // this.storage.set('password', this.password); 
 
      let user = {
        email: this.email,
        password: this.password
      };
      this.storage.set('user', user);     
    });
    this.presentToast('Data stored successfully!');
  }

  onGetInfo() {
    this.storage.ready().then(() => {
      
      // SEPARATE VALUES IMPLEMENTATION
      // this.storage.get('email').then((val) => {
      //   console.log('Stored email is', val);
      // })
      // this.storage.get('password').then((val) => {
      //   console.log('Stored password is', val);
      // })

      this.storage.get('user').then((val) => {
        this.dismissableToast('Email: ' + val.email + '\nPassword: ' + val.password);
      })  
       
    });
  }

  onHashing(){
    var t1 = Md5.hashStr('lorem ipsum');
    var t2 = Md5.hashStr('lorem ipsum', true);
    var t3 = Md5.hashAsciiStr('lorem ipsum');
    var t4 = Md5.hashAsciiStr('lorem ipsum', true);

    alert(t1);
    alert(t2);
    alert(t3);
    alert(t4);
  }

}
