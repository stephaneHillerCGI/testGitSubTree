import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyProvider } from '../../mySubTree/commonModule/src';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private myProvider: MyProvider
    ) {

  }


  ngOnInit() {
    this.myProvider.myMethod();
    this.navCtrl.push("MyPage");
  }
}
