import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PracticeModule } from './practice/practice.module';
import { LoginComponent } from './auth/login/login.component';
import { QuizModule } from './component/quiz/quiz.module';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './country/country.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountryComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   LayoutModule,
   MatButtonModule,
   MatMenuModule,
   MatToolbarModule,
   PracticeModule,
   QuizModule,
   FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
