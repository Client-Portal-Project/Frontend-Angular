import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetloginComponent } from './components/resetlogin/resetlogin.component';
import { AboutComponent } from './components/about/about.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CompanyComponent } from './components/register/company/company.component';
import { IndividualComponent } from './components/register/individual/individual.component';
import { ClientSkillsComponent } from './components/client-skills/client-skills.component';
import { ResetemailComponent } from './components/resetemail/resetemail.component';
import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';
import { FileViewerComponent } from './components/file-viewer/file-viewer.component';
import { ApplicantUploadComponent } from './components/applicant-upload/applicant-upload.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clientskills', component: ClientSkillsComponent },
  { path: 'resetlogin', component: ResetloginComponent },
  { path: 'resetemail', component: ResetemailComponent },
  { path: 'applicantdocs', component: ApplicantUploadComponent },
  { path: 'register/company', component: CompanyComponent },
  { path: 'register/individual', component: IndividualComponent },
  {path: "upload", component: FileuploaderComponent},
  {path: "fileView", component: FileViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
