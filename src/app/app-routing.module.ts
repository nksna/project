import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SareesComponent } from './sarees/sarees.component';
import { ElectronicsComponent } from './electronics/electronics.component';

const routes: Routes = [  {path:'signup',component:SignupComponent}, {path:'sarees',component:SareesComponent}, {path:'electronics',component:ElectronicsComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
