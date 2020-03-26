import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalperfil',
  templateUrl: './modalperfil.page.html',
  styleUrls: ['./modalperfil.page.scss'],
})
export class ModalperfilPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  close(){

    this.modalCtrl.dismiss();
  }

  editarperfil(){

    this.navCtrl.navigateForward('/editarperfil');
  }

}
