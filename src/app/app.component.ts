import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ,

]
})
export class AppComponent {
  title = 'EmployeManage';
  eductationOption = [
    'Diplomé' ,
    "Phd" ,
    "sans diplome"
  ]
  display = "none" ;
  openModal() {
    this.display = "block"
  }
  onCloseHandled(){
    this.display = "none"
  }
  constructor(){

  }
}
