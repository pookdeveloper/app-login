import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ReactiveFormsModule } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { TranslocoModule } from '@ngneat/transloco';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzCardModule,
    ReactiveFormsModule,
    NzImageModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzButtonModule,
    NzSwitchModule,
    TranslocoModule,
    NzGridModule,
    NzMessageModule
  ],
  exports: [LoginComponent]
})
export class LoginModule {
}
