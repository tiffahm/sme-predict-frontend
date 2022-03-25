import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { SubmitpageComponent } from './submitpage/submitpage.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'one', component:PageoneComponent},
  {path:'two', component:PagetwoComponent},
  {path:'three',component:PagethreeComponent},
  {path:'four',component:PagefourComponent},
  {path:'submit', component:SubmitpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
