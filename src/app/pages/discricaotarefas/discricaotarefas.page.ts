import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-discricaotarefas',
  templateUrl: './discricaotarefas.page.html',
  styleUrls: ['./discricaotarefas.page.scss'],
})
export class DiscricaotarefasPage implements OnInit {

  constructor(public voltarCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {

    this.voltarCtrl.navigateBack('/tabs/tarefas');

  }

}
