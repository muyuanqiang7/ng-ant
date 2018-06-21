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
      remember: [false]
    });
  }

  get userName() {
    return this.validateForm.get('userName');
  }

  get password() {
    return this.validateForm.get('password');
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    console.log(this.validateForm.status);
    if (this.validateForm.status === 'VALID') {
      this.auth.changLoggingStatus(this.validateForm.value.remember);
      this.router.navigate(['emcs']);
    }
  }

}
