import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalperfil',
  templateUrl: './modalperfil.page.html',
  styleUrls: ['./modalperfil.page.scss'],
})
export class ModalperfilPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  close(){

    this.modalCtrl.dismiss();
  }

}
