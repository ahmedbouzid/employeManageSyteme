import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeDto } from './models/EmployeDto.model';
import { ManagerService } from './service/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('profileImage') profileImage: any ;
  display = 'none';
  employeToDisplay: EmployeDto[] = [];
  eductationOption = ['Diplomé', 'Phd', 'sans diplome'];

  employeForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: ManagerService , private router : Router) {
    this.employeToDisplay;
  }
  ngOnInit(): void {
    this.employeForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      birthday: this.fb.control(''),
      gender: this.fb.control(''),
      educattion: this.fb.control('default'),
      profileImage: this.fb.control(''),
      company: this.fb.control(''),
      jobxperience: this.fb.control(''),
      salary: this.fb.control(''),
    });
    this.service.getAllEmployee().subscribe( res =>{
      console.log('La list est ::::::::::' ,res);

    })
  }
  AddEmploye() {
    this.service.postEmploye(this.employeForm.value).subscribe({
      next : (employe : EmployeDto)=> {
        this.employeToDisplay.unshift(employe)
        this.profileImage = this.employeForm.value.profileImage.nativeElement.files[0]?.name
        console.log(employe);
        this.router.navigate(['/'])
        this.employeForm.reset()
      }
    })
  }
  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
}
