import { ModalperfilPage } from './../modalperfil/modalperfil.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModalPerfil(){
    const modal = await this.modalCtrl.create({
      component: ModalperfilPage
    });

    modal.present();

  }

}
