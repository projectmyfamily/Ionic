import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public keyboard: Keyboard) { }

  ngOnInit() {
  }
  

}
