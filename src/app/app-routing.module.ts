import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { CompanyComponent } from './components/register/company/company.component';
import { IndividualComponent } from './components/register/individual/individual.component';
import { ClientSkillsComponent } from './components/client-skills/client-skills.component';
import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';
import { ApplicantUploadComponent } from './components/applicant-upload/applicant-upload.component';
import { MainComponent } from './components/main/main.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ResetemailComponent } from './resetemail/resetemail.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clientskills', component: ClientSkillsComponent },
  { path: 'applicantdocs', component: ApplicantUploadComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/company', component: CompanyComponent },
  { path: 'register/individual', component: IndividualComponent },
  { path: "upload", component: FileuploaderComponent},
  { path: "fileView", component: FileViewerComponent},
  { path: "main", component: MainComponent},
  { path: "profile-form", component: ProfileFormComponent},
  { path: "login", component: LoginComponent},
  { path: "forgot-password", component: ForgotPasswordComponent},
  { path: "reset-password/:email", component: ResetPasswordComponent},
  { path: "resetemail", component:ResetemailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
