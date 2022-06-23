import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {
  trains: {name:string, value:number}[]= [
    { name:'Yes',
    value:1},

    {name:'No', 
    value: 0}
  ];

  
   
  helps:{name:string, value:number}[] = [
    {name:'Family and friends(non-professionals)',
     value:0},
     {name:'Professionals',
     value:1}
  ];
  
  
  compliances: {name:string, value:number}[] = [
    {name:'Yes',
  value:1},
   {name:'No',
  value:0}
  ];
  
  families:{name:string, value:number}[] = [
    {name:'Yes',
  value:1},
  {name:'No',
   value:0}
  ];
  

  constructor(
    private router: Router,
     private appState: AppState
     ) { }

  ngOnInit(): void {
  }
  

  pageThreeModel = {
    businessTrains:undefined,
    businessHelp:undefined,
    businessCompliance:undefined,
    businessFamily:undefined,

  }
  next(){
    if (
      this.pageThreeModel.businessTrains === undefined ||
      this.pageThreeModel.businessHelp === undefined ||
      this.pageThreeModel.businessCompliance === undefined ||
      this.pageThreeModel.businessFamily === undefined
    ) {
      console.log(this.pageThreeModel)
      alert("Answer all questions.")
    }
    else {
      Object.values(this.pageThreeModel).forEach(x=>this.appState.appendUserData(Number(x)))
      this.router.navigateByUrl('/four')
    }
  }
   

}
