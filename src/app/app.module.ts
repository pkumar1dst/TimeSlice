import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { TimeSliceTableComponent } from './components/time-slice-table/time-slice-table.component';
import { TimeSliceButtonComponent } from './components/time-slice-button/time-slice-button.component';
import { CalenderComponent } from './components/calender/calender.component';
import {FormsModule} from '@angular/forms';
import {DataService} from './data.service';
import {CalenderService} from './calender.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PreferenceComponent,
    TimeSliceTableComponent,
    TimeSliceButtonComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      {path: 'preference', component: PreferenceComponent},
      {path: 'preferenceToggle', component: TimeSliceButtonComponent},
      {path: 'calender', component: CalenderComponent},

    ])
  ],
  providers: [DataService, CalenderService, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
