import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrontEndComponent } from './pages/front-end/front-end.component';
import { BackEndComponent } from './pages/back-end/back-end.component';
import { AboutComponent } from './pages/about/about.component';
import { SharedpagesComponent } from './sharedpages/sharedpages.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MyCoursesComponent } from './pages/dashboard/sidenav/my-courses/my-courses.component';
import { ResourcesComponent } from './pages/dashboard/sidenav/resources/resources.component';

import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './pages/dashboard/sidenav/profile/profile.component';
import { ProgressComponent } from './pages/dashboard/sidenav/progress/progress.component';
import { CourseManagementComponent } from './pages/dashboard/sidenav/course-management/course-management.component';
import { SettingsComponent } from './pages/dashboard/sidenav/settings/settings.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { TestsComponent } from './pages/dashboard/sidenav/tests/tests.component';

const routes: Routes = [
  {
    path: '',
    component: SharedpagesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'frontend', component: FrontEndComponent },
      { path: 'backend', component: BackEndComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'tests', component: TestsComponent },
      {path:'courses',component:MyCoursesComponent},
      {path:'resources',component:ResourcesComponent},
      { path: '', redirectTo: 'profile', pathMatch: 'full' }
    ]
  },
  {path:'login',component:LoginComponent},
   {path:'sign-up',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
