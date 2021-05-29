import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formService: FormService,
    private nzMessageService: NzMessageService,
    private translocoService: TranslocoService
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      reminder: new FormControl(''),
    });
  }

  submitForm(): void {
    this.formService.validateAllFormFields(this.form);
    if (this.form.valid) {
      this.nzMessageService.success(this.translocoService.translate('login.logged'));
      this.form.reset();
    }
  }

}
