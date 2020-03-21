import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  abrirCadastro() {
    this.navCtrl.navigateForward("CadastroPage");

  }

}
