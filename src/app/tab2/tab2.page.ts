import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public buttonA: number = 4;
  public buttonBplus: number = 3.5;
  public buttonB: number = 3;
  public buttonCplus: number = 2.5;
  public buttonC: number = 2;
  public buttonD: number = 1;
  public buttonF: number = 0;
  public all: number = 0;
  public unitCount: number = 0;



  constructor(public navCtrl: NavController) {
   // this.buttonA = 99;
  }
  btnclicked(name){
    console.log(name);

    //qpi calculation
    this.unitCount = this.unitCount + 3;
    this.all = ((this.all + name) * 3) / this.unitCount;


    console.log("total qpi= " + this.all);

  }
  value:string;


  
}


