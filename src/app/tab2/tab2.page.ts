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
  public totalSubject: number = 0;
  public rawQPI: number = 0;


  constructor(public navCtrl: NavController) {
   // this.buttonA = 99;
  }
  btnclicked(name:number){
    //console.log(name);

    //qpi calculation
    this.rawQPI = this.rawQPI + name;
    console.log("raw qpi is: " + this.rawQPI);
    this.all = this.rawQPI;

    this.totalSubject = this.totalSubject + 1;
    this.all = this.all / this.totalSubject;

    console.log("Total qpi: " + this.all);
    console.log("Total subject: " + this.totalSubject);
    //console.log("total qpi= " + this.all);

  }


  btnclear(event:any){
    this.all=0;
    this.totalSubject=0;
    this.rawQPI = 0;

  }
  value:string;


  
}


