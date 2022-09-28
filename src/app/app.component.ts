import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SvvcService } from './svvc.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  genders = ['Male', 'Female'];

  userForm: FormGroup;

  dataList: any;

  constructor(private fb: FormBuilder, private svc:SvvcService) {
    this.dataList = [],
      (this.userForm = this.fb.group({
        FName: ['', Validators.required],
        LName: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        company: ['', Validators.required],
        gender: ['', Validators.required],
        DOB: ['', Validators.required],
        password: ['', Validators.required],
        rPassword: ['', Validators.required],
      }));
  }

  public addUser() {
    this.dataList.push(this.userForm.value);

    this.svc.postUserData(FormData)
    .subscribe(data  => {
      console.warn(data);
    });
  }

  public reset() {
    this.userForm.reset();
  }

  ngOnInit(){
    this.svc.getUserData()
    .subscribe(data  => {
      console.warn(data);
    });
  }
}
