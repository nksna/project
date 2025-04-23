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
    LayoutComponent,
    HeaderComponent,
    NavBarComponent,
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
