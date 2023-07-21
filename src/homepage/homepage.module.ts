import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import {RouterModule, Routes} from '@angular/router'

const ROUTES: Routes = [
  {path:'', component: HomepageComponent}
]
/**
 * contains the homepage 
 */
@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomepageModule { }
