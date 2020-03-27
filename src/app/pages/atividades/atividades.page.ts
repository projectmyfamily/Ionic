import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  abrirReuniao() {

    this.navCtrl.navigateForward('/reuniao');
  }

  abrirViajem() {

    this.navCtrl.navigateForward('/viajem');
  }

  abrirConselho(){

    this.navCtrl.navigateForward('/conselho');
  }

  abrirComemoracao(){

    this.navCtrl.navigateForward('/comemoracoes');
  }

  abrirFotos(){

    this.navCtrl.navigateForward('/albumfotos');
  }

}
