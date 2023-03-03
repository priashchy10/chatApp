import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info.component';

const routes: Routes = [];

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forChild([
    { path: 'user-info', component: UserInfoComponent }
  ])],
  exports: [RouterModule]
})
export class UserinfoRoutingModule { }
