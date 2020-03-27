import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-membros',
  templateUrl: './membros.page.html',
  styleUrls: ['./membros.page.scss'],
})
export class MembrosPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  abriraddmembro(){

    this.navCtrl.navigateForward('/addmembro');
  }


}
