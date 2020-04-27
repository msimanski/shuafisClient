import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { QueryComparisonComponent } from './query-comparison/query-comparison.component';
import { QueryUnknownComponent } from './query-unknown/query-unknown.component';
import { UploadProfileComponent } from './upload-profile/upload-profile.component';


const routes: Routes = [
{path: 'home-dashboard', component: HomeDashboardComponent},
{path: 'query-comparison', component: QueryComparisonComponent},
{path: 'upload-profile', component: UploadProfileComponent},
{path: 'query-unknown', component: QueryUnknownComponent},
{path: '', redirectTo: '/home-dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
