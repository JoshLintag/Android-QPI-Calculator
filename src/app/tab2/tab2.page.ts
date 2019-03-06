import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { variable } from '@angular/compiler/src/output/output_ast';
import { PopoverController } from '@ionic/angular';


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


  public AText: String = "A";
  public BplusText: String = "B+";
  public BText: String = "B";
  public CplusText: String = "C+";
  public CText: String = "C";
  public DText: String = "D";
  public FText: String = "F";
  public tally: String;
 
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
    
    if(this.all < 1.00){
      alert("GG ORBSKIE");
    }

  }


  btnclear(event:any){
    this.all=0;
    this.totalSubject=0;
    this.rawQPI = 0;
    this.tally = undefined;
  }


  btnTally(name:String){
    if(this.tally == undefined){
      this.tally = name;
      // console.log("GRADE TALLY: " + this.tally);
    }
    else{
      this.tally = this.tally + " , " + name 
      // console.log("GRADE TALLY: " + this.tally);
    }
    
    
  }
  value:string;

  btnpress(event:any){
    alert("you are holding this button");
  }



    
  

  
}


