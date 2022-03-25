import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  businessDrive!:string;
  businessBefore!:string;
  businessHelp!:string;
  helps:string[]=['Yes', ]
  businesses:string[]=['Yes','No'];
  drives:string[]=['passion','market needs','need for money','Just like everyone']

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
partTwo(){
  this.router.navigateByUrl('/two');
}
}
