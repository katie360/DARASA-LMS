import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharedpagesComponent } from './sharedpages/sharedpages.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './sharedpages/header/header.component';
import { FooterComponent } from './sharedpages/footer/footer.component';
import { FrontEndComponent } from './pages/front-end/front-end.component';
import { BackEndComponent } from './pages/back-end/back-end.component';
import { GeneralComponent } from './pages/general/general.component';
import { AllCoursesComponent } from './pages/all-courses/all-courses.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/dashboard/sidenav/profile/profile.component';
import { ProgressComponent } from './pages/dashboard/sidenav/progress/progress.component';
import { CourseManagementComponent } from './pages/dashboard/sidenav/course-management/course-management.component';
import { SettingsComponent } from './pages/dashboard/sidenav/settings/settings.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MyCoursesComponent } from './pages/dashboard/sidenav/my-courses/my-courses.component';
import { ResourcesComponent } from './pages/dashboard/sidenav/resources/resources.component';
import { TestsComponent } from './pages/dashboard/sidenav/tests/tests.component';
import { AssistComponent } from './pages/dashboard/sidenav/assist/assist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EnrollCourseComponent } from './pages/dashboard/sidenav/enroll-course/enroll-course.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutComponent } from './pages/dashboard/sidenav/checkout/checkout.component';
import { PaypalCheckoutComponent } from './pages/dashboard/sidenav/paypal-checkout/paypal-checkout.component';





@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SharedpagesComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FrontEndComponent,
    BackEndComponent,
    GeneralComponent,
    AllCoursesComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    ProgressComponent,
    CourseManagementComponent,
    SettingsComponent,
    DashboardComponent,
    SignUpComponent,
    MyCoursesComponent,
    ResourcesComponent,
    TestsComponent,
    AssistComponent,
    EnrollCourseComponent,
    CheckoutComponent,
    PaypalCheckoutComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    // MatMomentDateModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
