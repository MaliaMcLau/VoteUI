import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { ElectionListComponent } from './election-list/election-list.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'candidates', component: CandidateListComponent },
  { path: 'elections', component: ElectionListComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
