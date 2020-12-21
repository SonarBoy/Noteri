import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms module for inputting data
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { TesseractTestComponent } from './boot/tesseract-test/tesseract-test.component';
import { AngularExamplesComponent } from './angular-examples/angular-examples.component';
import { ItemDetailComponent } from './angular-examples/item-detail/item-detail.component';
import { ClickDirective } from './angular-examples/click.directives';
import { ParentComponent } from './angular-examples/parent/parent.component';
import { ChildComponent } from './angular-examples/child/child.component';
import { ReactiveFormExampleComponent } from './angular-examples/reactive-form-example/reactive-form-example.component';
import { TwoWayDataBindingExampleComponent } from './angular-examples/two-way-data-binding-example/two-way-data-binding-example.component';
import { HtmlExamplesComponent } from './boot/html-examples/html-examples.component';
import { AngularBasicsComponent } from './angular-examples/angular-basics/angular-basics.component';
import { PropertyBindingExampleComponent } from './angular-examples/property-binding-example/property-binding-example.component';
import { AttributeBindingExampleComponent } from './angular-examples/attribute-binding-example/attribute-binding-example.component';



@NgModule({
  declarations: [
    AppComponent,
    //Importing the heros component
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    TesseractTestComponent,
    AngularExamplesComponent,
    ItemDetailComponent,
    ClickDirective,
    ParentComponent,
    ChildComponent,
    ReactiveFormExampleComponent,
    TwoWayDataBindingExampleComponent,
    HtmlExamplesComponent,
    AngularBasicsComponent,
    PropertyBindingExampleComponent,
    AttributeBindingExampleComponent
  ],
  imports: [
    BrowserModule,
    //Importing of forms module here
    FormsModule,
    AppRoutingModule,
    //added HTTP CLIENT MODULE
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
