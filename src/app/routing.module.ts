import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PagenotfoundComponent } from 'src/shared/pages/pagenotfound/pagenotfound.component';


/**
 * top level routes,
 * routes on the app level
 */
const ROUTES: Routes = [
  {path:'home',loadChildren:() => import('../homepage/homepage.module').then(m => m.HomepageModule) },
  {path:'pagenotfound', component:PagenotfoundComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'pagenotfound',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
