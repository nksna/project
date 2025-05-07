import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrl: './side-nav-bar.component.css'
})
export class SideNavBarComponent {

  userrole:any
  constructor(){
    this.userrole=localStorage.getItem('key')
    console.log(this.userrole)
  }
}
