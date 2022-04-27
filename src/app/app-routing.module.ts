import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PagefourComponent } from './components/pagefour/pagefour.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagethreeComponent } from './components/pagethree/pagethree.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { SubmitpageComponent } from './pages/submitpage/submitpage.component';

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
