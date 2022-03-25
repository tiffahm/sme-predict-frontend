import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagefour',
  templateUrl: './pagefour.component.html',
  styleUrls: ['./pagefour.component.css']
})
export class PagefourComponent implements OnInit {
  addingBusiness !: string;
  increasedCustomers!:string;
  businessCost!:string;
  expansionOptions: string[]=['Yes', 'No', 'Other'];
  costs: string[]=['Cost is greater than income','Income is greater than cost','Cost equals the Income'
  ,'Not Sure'];
  customers:string[]=['Yes', 'No', 'Not Sure'];



  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  close(){
    this.router.navigateByUrl('/submit')
  }
}
