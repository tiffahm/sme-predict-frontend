import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagethree',
  templateUrl: './pagethree.component.html',
  styleUrls: ['./pagethree.component.css']
})
export class PagethreeComponent implements OnInit {
  businessTrain!:string;
  trains:string[]=['Yes', 'No'];
  businessHelp!:string;
  helps:string[]=['Professionals','Family and Friends','Other'];
  businessCompliance!:string;
  compliances:string[]=['Yes', 'No'];
  businessFamily!:string;
  families:string[]=['Yes', 'No'];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  next(){
    this.router.navigateByUrl('/four')
  }

}
