import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { AppState } from 'src/app/states/app.state';

@Component({
  selector: 'app-submitpage',
  templateUrl: './submitpage.component.html',
  styleUrls: ['./submitpage.component.css']
})
export class SubmitpageComponent implements OnInit {
loading = false
jibu: any = null
  constructor(
    private appService: AppService
    ) { }

  ngOnInit(): void {
    this.loading = true
    this.appService.predict().then(x=>this.jibu=x)
    .catch(r=>{
      alert(r)
    }).finally(()=>{
      this.loading = false
    })
  }

}
