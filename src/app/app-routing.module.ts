import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent, //Jika ada router/path memilih login maka tampilkan komponen login
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot',
    component: ForgotComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((mod) => mod.AdminModule), //Jika ada router/path memilih admin makan diarahkan ke admin module
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((mod) => mod.PublicModule), //Jika ada router/path memilih admin makan diarahkan ke admin module
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login', //jika path kosong maka arahkan ke halaman login
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
