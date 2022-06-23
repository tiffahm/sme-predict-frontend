import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  
  helps:{name:string, value:number}[] =[
    {name:'Yes',
  value:1},
  {name:'No',
value:0}
  ];

  businesses:{name:string, value:number}[] = [
    {name:'Yes', value:1},
    {name:'No', value:0}
  ];
  drives:{name:string, value:number}[]=[{name:'passion',value: 3},
  {name:'market needs',value: 1},
   {name:'need for money',value:2},
    {name:'Just like everyone', value:0}]

    constructor(
      private router: Router,
       private appState: AppState
       ) { }
  

  ngOnInit(): void {
  }


pageOneModel = {
  businessDrive:undefined,
  businessBefore:undefined,
  businessHelp:undefined,

}
partTwo(){
  if (
    this.pageOneModel.businessBefore === undefined ||
    this.pageOneModel.businessHelp === undefined ||
    this.pageOneModel.businessDrive === undefined
  ) {
    console.log(this.pageOneModel)
    alert("Answer all questions.")
  }
  else {
    Object.values(this.pageOneModel).forEach(x=>this.appState.appendUserData(Number(x)))
    this.router.navigateByUrl('/two')
  }
}
}
