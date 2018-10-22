import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule, Routes} from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // redirect route
  { path: 'heroes', component: HeroesComponent }, // simple route
  { path: 'dashboard', component: DashboardComponent }, // simple route
  { path: 'detail/:id', component: HeroDetailComponent } // parameterized route
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}

