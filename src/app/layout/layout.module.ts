import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
<<<<<<< HEAD
    
=======
   
>>>>>>> 3724b18fe89ba83f966831ce34ba91a3f82ae7e7
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: []
})
export class LayoutModule { }
