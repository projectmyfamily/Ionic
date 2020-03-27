import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addtarefas',
  templateUrl: './addtarefas.page.html',
  styleUrls: ['./addtarefas.page.scss'],
})
export class AddtarefasPage implements OnInit {

  constructor( public navCtrl : NavController) { }

  ngOnInit() {
  }

  voltar(){

    this.navCtrl.navigateBack('/tabs/tarefas');
  }

}
