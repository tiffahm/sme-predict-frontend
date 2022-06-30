import { HtmlParser } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { PagefourComponent } from "./components/pagefour/pagefour.component";
import { PageoneComponent } from "./components/pageone/pageone.component";
import { PagethreeComponent } from "./components/pagethree/pagethree.component";
import { PagetwoComponent } from "./components/pagetwo/pagetwo.component";
import { SubmitpageComponent } from "./pages/submitpage/submitpage.component";
import { LoginComponent } from "./login/login.component";
import { LoginGuard } from "./guards/login";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "one", canActivate: [LoginGuard], component: PageoneComponent },
  { path: "two", canActivate: [LoginGuard], component: PagetwoComponent },
  { path: "three", canActivate: [LoginGuard], component: PagethreeComponent },
  { path: "four", canActivate: [LoginGuard], component: PagefourComponent },
  { path: "submit", canActivate: [LoginGuard], component: SubmitpageComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
