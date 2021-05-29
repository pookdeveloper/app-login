import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotLoggedGuard } from './guards/not-logged.guard';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    canActivate: [NotLoggedGuard]
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
