import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-pagefour',
  templateUrl: './pagefour.component.html',
  styleUrls: ['./pagefour.component.css']
})
export class PagefourComponent implements OnInit {
  
  expansionOptions: {name:string,value:number} []=[{name:'Yes',value:0},
  {name: 'No',value:0}];

  costs: {name: string, value: number}[]=[
    {
      name: 'Cost is greater than income',
      value: 1
    },
    {
      name: 'Income is greater than cost',
      value: 2
    },
    {
      name: 'Not Sure',
      value: 3
    }
  ];
  customers:{name:string,value:number}[]=[{name:'Yes', value:0},{name:'No', value:0}];




  constructor(private router:Router, private appState:AppState) { }

  ngOnInit(): void {
  }
  pageFourModel = {
    addingBusiness:undefined,
    businessCost:undefined,
    increasedCustomers:undefined,
  
  }
  close(){
    if (
      this.pageFourModel.businessCost=== undefined ||
      this.pageFourModel.addingBusiness === undefined ||
      this.pageFourModel.increasedCustomers === undefined
    ) {
      // console.log(this.pageFourModel)
      alert("Answer all questions.")
    }
    else {
      Object.values(this.pageFourModel).forEach(x=>this.appState.appendUserData(Number(x)))
      this.router.navigateByUrl('/submit')
    }
  }
}
