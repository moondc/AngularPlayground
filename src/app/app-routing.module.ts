import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Routes/dashboard/dashboard.component';
import { BasicComponent } from './Routes/basic-component/basic.component';
import { TemplateDashboardComponent } from './Routes/template/template-dashboard/template-dashboard.component';
import { DirectiveDashboardComponent } from './Routes/directive/directive-dashboard/directive-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-component', component: BasicComponent },
  { path: 'templates', component: TemplateDashboardComponent },
  { path: 'directives', component: DirectiveDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }