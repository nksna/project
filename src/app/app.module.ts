import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { LoginComponent } from './login/login.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { WomanComponent } from './woman/woman.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    KidsComponent,
    MensComponent,
    HeaderComponent,
    NavBarComponent,
    WomanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LayoutModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
