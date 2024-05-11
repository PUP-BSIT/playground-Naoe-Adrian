import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          this.failIfHasTest,
          this.failIfHasWord('bad', 'bad_word', 'Contain bad word!'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  failIfHasTest(control: AbstractControl) {
    if (!control.value.toLowerCase().includes('test')) {
      return null;
    }
    return { test_data: 'value is invalid' };
  }

  failIfHasWord(word: string, errCode: string, errMsg: string): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value.toLowerCase().includes(word)) {
        return null;
      }
      return { [errCode]: errMsg };
    };
  }

  onSubmit() {
    if (!this.loginForm.valid) return;
    console.log(this.loginForm.value);
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }
}
