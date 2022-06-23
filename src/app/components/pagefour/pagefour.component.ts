import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-pagefour',
  templateUrl: './pagefour.component.html',
  styleUrls: ['./pagefour.component.css']
})
export class PagefourComponent implements OnInit {
  
  technologies: {name:string,value:number} []=[{name:'Yes',value:1},
  {name: 'No',value:0}];

  times: {name: string, value: number}[]=[
    {
      name: 'two to five year',
      value: 1
    },
    {
      name: 'zero to one year',
      value: 2
    },
    {name:'more than six years',
    value: 0

  },
    
  ];
  expansionOptions:{name:string,value:number}[]=[{name:'Yes', value:1},{name:'No', value:0},
  
 ];




  constructor(private router:Router, private appState:AppState) { }

  ngOnInit(): void {
  }
  pageFourModel = {
    businessTechnology:undefined,
    businessTime:undefined,
    businessExpansion:undefined,
  
  }
  close(){
    if (
      this.pageFourModel.businessTime=== undefined ||
      this.pageFourModel.businessExpansion === undefined ||
      this.pageFourModel.businessTechnology === undefined
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
