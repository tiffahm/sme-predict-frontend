import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {
  records: { name: string, value: number }[] = [
    {
      name: 'Yes',
      value: 1
    },
    {
      name: 'No',
      value: 0
    }
  ];
  labors: { name: string, value: number }[] = [
    {
      name: 'Skilled',
      value: 0
    },
    {
      name: 'Non skilled',
      value: 0
    }, {
      name: 'Both skilled and Non skilled',
      value: 0
    },
    {
      name: 'semi-skilled', value: 0
    }
  ];
  losses: { name: string, value: number }[] = [
    {
      name: 'Yes',
      value: 1
    },
    {
      name: 'No',
      value: 0
    }
  ];
  plans: { name: string, value: number }[] = [
    {
      name: 'Yes',
      value: 1
    },
    {
      name: 'No',
      value: 0
    }
  ];
  pageTwoModel = {
    businessPlan: undefined,
    businessLoss: undefined,
    businessLabor: undefined,
    businessRecords: undefined
  }

  constructor(
    private router: Router,
     private appState: AppState
     ) { }

  ngOnInit(): void {
  }

  partThree() {
    if (
      this.pageTwoModel.businessLabor === undefined ||
      this.pageTwoModel.businessLoss === undefined ||
      this.pageTwoModel.businessPlan === undefined ||
      this.pageTwoModel.businessRecords === undefined
    ) {
      console.log(this.pageTwoModel)
      alert("Answer all questions.")
    }
    else {
      Object.values(this.pageTwoModel).forEach(x=>this.appState.appendUserData(Number(x)))
      this.router.navigateByUrl('/three')
    }
  }

}
