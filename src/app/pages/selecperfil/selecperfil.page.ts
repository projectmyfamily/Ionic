import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModaladdperfilPage } from '../modaladdperfil/modaladdperfil.page';

@Component({
  selector: 'app-selecperfil',
  templateUrl: './selecperfil.page.html',
  styleUrls: ['./selecperfil.page.scss'],
})
export class SelecperfilPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async addPerfil(){
    const modal = await this.modalCtrl.create({
      component: ModaladdperfilPage
    });

    modal.present();

  }


}
