import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/admin/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SubmittedPageComponent } from './components/submitted-page/submitted-page.component';
import { SurveyComponent } from './components/survey/survey.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        canActivate: [AdminGuard],
        component: DashboardComponent,
      },
    ],
  },
  {
    path: 'notFound',
    component: PagenotfoundComponent,
  },
  {
    path: 'success',
    component: SubmittedPageComponent,
  },
  {
    path: '**',
    component: SurveyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
