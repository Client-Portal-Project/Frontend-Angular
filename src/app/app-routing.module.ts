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
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { UserComponent } from './components/register/user/user.component';
// import { Auth0LoginComponent } from './components/auth0login/auth0login.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'clientskills', component: ClientSkillsComponent },
  { path: 'applicantdocs', component: ApplicantUploadComponent },
  { path: 'register', component: UserComponent },
  // { path: 'register/company', component: CompanyComponent },
  // { path: 'register/individual', component: IndividualComponent },
  { path: "upload", component: FileuploaderComponent},
  { path: "fileView", component: FileViewerComponent},
  { path: "main", component: MainComponent},
  { path: "profile", component: ProfileFormComponent},
  { path: "login", component: LoginComponent},
  { path: "reset-password", component: ResetPasswordComponent},
  { path: '', component: LandingComponent },
  // { path: "*", component: NotFoundPageComponent},
//  { path: "auth0login", component: Auth0LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
