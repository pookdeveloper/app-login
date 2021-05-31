import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { TranslocoModule, TranslocoTestingModule } from '@ngneat/transloco';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { IconDefinition } from '@ant-design/icons-angular';
// Import all not recomended only for testing ..
import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let nzMessageService: NzMessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        OverlayModule,
        NzMessageModule,
        TranslocoTestingModule,
        CommonModule,
        NzLayoutModule,
        NzCardModule,
        ReactiveFormsModule,
        NzImageModule,
        NzInputModule,
        NzIconModule.forRoot(icons),
        NzFormModule,
        NzButtonModule,
        NzSwitchModule,
        TranslocoModule,
        NzGridModule],
    }).compileComponents();
    nzMessageService = TestBed.inject(NzMessageService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.form).toBeDefined();
    expect(component.form.invalid).toBeTruthy();
    expect(component.state).toEqual('default');
  });

  it('submitted without modify form should not show error at init', async () => {
    fixture.detectChanges();

    const errorEmail = fixture.debugElement.query(By.css('#emailInput .ng-trigger-helpMotion'));
    const errorPassword = fixture.debugElement.query(By.css('#passwordInput .ng-trigger-helpMotion'));

    expect(errorEmail).toBeFalsy();
    expect(errorPassword).toBeFalsy();
  });

  it('submitted without modify form should show error on submit', async () => {
    component.submitForm();
    fixture.detectChanges();

    const errorEmail = fixture.debugElement.query(By.css('#emailInput .ng-trigger-helpMotion')).nativeElement.innerHTML;
    const errorPassword = fixture.debugElement.query(By.css('#passwordInput .ng-trigger-helpMotion')).nativeElement.innerHTML;

    expect(errorEmail).toContain('login.emailError');
    expect(errorPassword).toContain('login.passwordError');
  });

  it('submitted form should be valid', (() => {
    const nzMessageServiceSpyOn = spyOn(nzMessageService, 'success');
    component.form.setValue({email: 'prueba@prueba.com', password: '12345', reminder: false});
    component.submitForm();
    fixture.detectChanges();
    expect(nzMessageServiceSpyOn).toHaveBeenCalled();
  }));
});

