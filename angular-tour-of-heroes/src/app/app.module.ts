import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms module for inputting data
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

//Importing the heros component
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ExamplesComponent } from './boot/examples/examples.component';
import { TesseractTestComponent } from './boot/tesseract-test/tesseract-test.component';
import { AngularExamplesComponent } from './angular-examples/angular-examples.component';



@NgModule({
  declarations: [
    AppComponent,
    //Importing the heros component
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    ExamplesComponent,
    TesseractTestComponent,
    AngularExamplesComponent
  ],
  imports: [
    BrowserModule,
    //Importing of forms module here
    FormsModule,
    AppRoutingModule,
    //added HTTP CLIENT MODULE
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
