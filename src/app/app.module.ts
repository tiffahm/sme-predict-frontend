import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCard, MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapType } from '@angular/compiler';
import { HomepageComponent } from './homepage/homepage.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { PagethreeComponent } from './pagethree/pagethree.component';
import { PagefourComponent } from './pagefour/pagefour.component';
import { SubmitpageComponent } from './submitpage/submitpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageoneComponent,
    PagetwoComponent,
    PagethreeComponent,
    PagefourComponent,
    SubmitpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatRadioModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
