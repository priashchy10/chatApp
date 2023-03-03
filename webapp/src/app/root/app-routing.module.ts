import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../feature/auth/login/login.component';
import { AppMainComponent } from './app.main.component';

const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AppMainComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../feature/userinfo/userinfo.module').then(m => m.UserinfoModule)
      },
      //{
      //  path: '',
      //  loadChildren: () => import('../feature/product/product.module').then(m => m.ProductModule)
      //}
    ]
  },
  //{ path: '**', redirectTo: 'pages/notfound' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
