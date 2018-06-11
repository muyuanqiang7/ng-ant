import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NesAuthService} from '../../../service/auth/nes-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nes-login',
  templateUrl: './nes-login.component.html',
  styleUrls: ['./nes-login.component.css']
})
export class NesLoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: NesAuthService, private router: Router) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    // for (const i of this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
    console.log(this.validateForm.value);
    console.log(this.validateForm.status);
    if (this.validateForm.status === 'VALID') {
      this.auth.changLoggingStatus();
      this.router.navigate(['emcs']);
    }
  }

}
