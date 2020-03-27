import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-addmembro',
  templateUrl: './addmembro.page.html',
  styleUrls: ['./addmembro.page.scss'],
})
export class AddmembroPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  close() {

    this.navCtrl.navigateBack('/tabs/membros');

  }



}
