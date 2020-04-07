import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HerosComponent} from './heros/heros.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { ExamplesComponent } from './boot/examples/examples.component';
import { TesseractTestComponent } from './boot/tesseract-test/tesseract-test.component';


const routes: Routes = [
  {path: 'heroes', component: HerosComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent },
  {path: 'examples', component: ExamplesComponent},
  {path: '', redirectTo: '/dashboard',pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
