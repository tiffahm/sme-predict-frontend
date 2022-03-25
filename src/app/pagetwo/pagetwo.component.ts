import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent implements OnInit {
  businessPlan!:string;
  businessLoss!:string;
  businessLabor!:string;
  businessRecords!:string;
  records:string[]=['Yes', 'No'];
  labors:string[]=['Skilled', 'Non skilled','Both skilled and Non skilled','semi-skilled']
  losses:string[]=['Yes', 'No']
  plans:string[]=['Yes','No'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
partThree(){
  this.router.navigateByUrl('/three')
}
}
