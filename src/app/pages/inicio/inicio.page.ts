import { ModalajudaPage } from './../modalajuda/modalajuda.page';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router: Router, public navCtrl: NavController, public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  abrirCadastro() {
    this.navCtrl.navigateForward('/cadastro');

  }
  abrirLogin() {

    this.navCtrl.navigateForward('/login');
  }

  async abrirAjuda() {
    const modal = await this.modalCtrl.create({
      component: ModalajudaPage
    });

    modal.present();

  }

}
