import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslocoService } from '@ngneat/transloco';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-360deg)'})),
      transition('rotated => default', animate('400ms ease-in')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class LoginComponent implements OnInit {

  state = 'default';
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
      this.rotate();
      this.nzMessageService.success(this.translocoService.translate('login.logged'));
      this.form.reset();
    }
  }

  rotate(): void {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

}
