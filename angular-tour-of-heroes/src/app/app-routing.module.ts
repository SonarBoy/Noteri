import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HerosComponent} from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { TesseractTestComponent } from './boot/tesseract-test/tesseract-test.component';
import { AngularExamplesComponent } from './angular-examples/angular-examples.component';
import { ParentComponent } from './angular-examples/parent/parent.component';
import { ChildComponent } from './angular-examples/child/child.component';
import { TwoWayDataBindingExampleComponent } from './angular-examples/two-way-data-binding-example/two-way-data-binding-example.component';
import { HtmlExamplesComponent } from './boot/html-examples/html-examples.component';
import { AngularBasicsComponent } from './angular-examples/angular-basics/angular-basics.component';
import { PropertyBindingExampleComponent } from './angular-examples/property-binding-example/property-binding-example.component';
import { AttributeBindingExampleComponent } from './angular-examples/attribute-binding-example/attribute-binding-example.component';
import { ReactiveFormExampleComponent } from './angular-examples/reactive-form-example/reactive-form-example.component';


const routes: Routes = [
  {path: 'heroes', component: HerosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent },
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'tesseract', component: TesseractTestComponent},
  {path: 'angularExamples', component: AngularExamplesComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path: 'twoWayDataBinding', component:TwoWayDataBindingExampleComponent},
  {path: 'htmlExamples', component:HtmlExamplesComponent},
  {path: 'angularBasics', component: AngularBasicsComponent},
  {path: 'propertyBinding', component: PropertyBindingExampleComponent},
  {path: 'attributeBinding', component: AttributeBindingExampleComponent},
  {path: 'reactiveForms', component: ReactiveFormExampleComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
