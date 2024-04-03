import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KidsComponent } from './kids/kids.component';
import { MensComponent } from './mens/mens.component';
import { WomanComponent } from './woman/woman.component';



const routes: Routes = [{path:'login',component:LoginComponent},{path:'kids',component:KidsComponent},{path:'mens',component:MensComponent},{path:'woman',component:WomanComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
