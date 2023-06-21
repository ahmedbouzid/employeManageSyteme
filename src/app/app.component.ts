import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ,

]
})
export class AppComponent implements OnInit {

  eductationOption = [
    'Diplomé' ,
    "Phd" ,
    "sans diplome"
  ]

  employeForm !: FormGroup ;
  constructor(private fb : FormBuilder) {

  }
  ngOnInit(): void {
    this.employeForm = this.fb.group({
      firstName: this.fb.control('') ,
      lastName : this.fb.control(''),
      birthday:this.fb.control(''),
      gender :this.fb.control('') ,
      educattion : this.fb.control('default') ,
      profileImage : this.fb.control(''),
      company : this.fb.control(''),
      jobxperience : this.fb.control(''),
      salary : this.fb.control('')
    })
  }
  display = "none" ;
  openModal() {
    this.display = "block"
  }
  onCloseHandled(){
    this.display = "none"
  }


}
