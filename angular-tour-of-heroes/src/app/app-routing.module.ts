import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HerosComponent} from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { ExamplesComponent } from './boot/examples/examples.component';
import { TesseractTestComponent } from './boot/tesseract-test/tesseract-test.component';
import { AngularExamplesComponent } from './angular-examples/angular-examples.component';
import { ParentComponent } from './angular-examples/parent/parent.component';
import { ChildComponent } from './angular-examples/child/child.component';
import { TwoWayDataBindingExampleComponent } from './angular-examples/two-way-data-binding-example/two-way-data-binding-example.component';


const routes: Routes = [
  {path: 'heroes', component: HerosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent },
  {path: 'examples', component: ExamplesComponent},
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'},
  {path: 'tesseract', component: TesseractTestComponent},
  {path: 'angularExamples', component: AngularExamplesComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent},
  {path: 'twoWayDataBinding', component:TwoWayDataBindingExampleComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
