import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { QueryComparisonComponent } from './query-comparison/query-comparison.component';


const routes: Routes = [
{path: 'home-dashboard', component: HomeDashboardComponent},
{path: 'query-comparison', component: QueryComparisonComponent},
{path: '', redirectTo: '/home-dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
