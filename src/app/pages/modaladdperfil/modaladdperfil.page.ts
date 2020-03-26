import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modaladdperfil',
  templateUrl: './modaladdperfil.page.html',
  styleUrls: ['./modaladdperfil.page.scss'],
})
export class ModaladdperfilPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){

    this.modalCtrl.dismiss();
  }

}
