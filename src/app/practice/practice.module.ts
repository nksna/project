import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpexampleComponent } from './httpexample/httpexample.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HttpexampleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    HttpexampleComponent
  ]
})
export class PracticeModule { }
