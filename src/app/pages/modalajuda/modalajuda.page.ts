import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalajuda',
  templateUrl: './modalajuda.page.html',
  styleUrls: ['./modalajuda.page.scss'],
})
export class ModalajudaPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close(){

    this.modalCtrl.dismiss();
  }

}
