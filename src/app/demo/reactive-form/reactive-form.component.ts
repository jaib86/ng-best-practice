import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { compareValidator } from '../../shared/compare-validator.directive';
import { UserService } from '../../shared/user.service';
import { uniqueEmailValidator } from '../../shared/unique-email-validator.directive';
import { uniqueUsernameValidator } from '../../shared/unique-username-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // use FormGroup
    // this.reactiveForm = new FormGroup({
    //   email: new FormControl('', Validators.required),
    //   emailConfirm: new FormControl('', [Validators.required, compareValidator('email')]),
    //   password: new FormControl('', Validators.required),
    //   passwordConfirm: new FormControl('', [Validators.required, , compareValidator('password')])
    // });

    // use FormBuilder
    this.reactiveForm = this.fb.group({
      username: [
        '',
        Validators.required,
        uniqueUsernameValidator(this.userService) // async validator
      ],
      email: [
        '',
        Validators.required,
        uniqueEmailValidator(this.userService) // async validator
      ],
      emailConfirm: [
        '',
        [Validators.required, compareValidator('email')],
        uniqueEmailValidator(this.userService) // async validator
      ],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, compareValidator('password')]]
    });
  }

  get username() {
    return this.reactiveForm.get('username');
  }

  get email() {
    return this.reactiveForm.get('email');
  }

  get emailConfirm() {
    return this.reactiveForm.get('emailConfirm');
  }
  get password() {
    return this.reactiveForm.get('password');
  }
  get passwordConfirm() {
    return this.reactiveForm.get('passwordConfirm');
  }
}
