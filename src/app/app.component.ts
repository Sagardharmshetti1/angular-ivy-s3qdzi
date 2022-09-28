import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SvvcService } from './svvc.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  genders = ['Male', 'Female'];

  userForm: FormGroup;

  dataList: any;

  constructor(private fb: FormBuilder, private svc:SvvcService) {
    (this.dataList = []),
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
    this.userForm.reset();

      this.svc.postUserData(this.userForm.value)
  }

  public reset() {
    this.userForm.reset();
  }
}
