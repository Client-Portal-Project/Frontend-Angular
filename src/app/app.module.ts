import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { UtilService } from './services/util.service';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetloginComponent } from './components/resetlogin/resetlogin.component';
import { CompanyComponent } from './pages/register/company/company.component';
import { IndividualComponent } from './pages/register/individual/individual.component';
import { ClientSkillsComponent } from './pages/client-skills/client-skills.component';
import { ResetemailComponent } from './components/resetemail/resetemail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RegisterComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    ResetloginComponent,
    CompanyComponent,
    IndividualComponent,
    ClientSkillsComponent,
    ResetemailComponent
    
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
    ReactiveFormsModule
   
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
