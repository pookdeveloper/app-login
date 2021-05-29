import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { es_ES, NZ_I18N } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginModule } from './modules/login/login.module';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LockOutline, UserOutline } from '@ant-design/icons-angular/icons';

registerLocaleData(es);

const icons: IconDefinition[] = [LockOutline, UserOutline];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslocoRootModule,
    NzLayoutModule,
    LoginModule,
    NzIconModule.forRoot(icons),

  ],
  providers: [{provide: NZ_I18N, useValue: es_ES}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
