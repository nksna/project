import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    LayoutComponent,
    
    SideNavBarComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
