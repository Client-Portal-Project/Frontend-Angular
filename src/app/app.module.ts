import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { UtilService } from './services/util.service';
import { AboutComponent } from './components/about/about.component';
import { CompanyComponent } from './components/register/company/company.component';
import { IndividualComponent } from './components/register/individual/individual.component';
import { ClientSkillsComponent } from './components/client-skills/client-skills.component';
import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';
import { ApplicantComponent } from './components/main/applicant/applicant.component';
import { RecruiterComponent } from './components/main/recruiter/recruiter.component';
import { MainComponent } from './components/main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    NavbarComponent,
    AboutComponent,
    CompanyComponent,
    IndividualComponent,
    ClientSkillsComponent,
    FileViewerComponent,
    FileuploaderComponent,
    ApplicantComponent,
    RecruiterComponent,
    MainComponent,
    ProfileFormComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [
    UtilService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
