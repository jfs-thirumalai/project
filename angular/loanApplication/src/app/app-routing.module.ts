import { ApprovalComponent } from './checkercomponents/approval/approval.component';
import { EditComponent } from './makercomponents/edit/edit.component';
import { CreateComponent } from './makercomponents/create/create.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewAllComponent } from './makercomponents/view-all/view-all.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent },
  {path: 'view', component: ViewComponent , canActivate: [AuthGuard]},
  {path: 'viewAll', component: ViewAllComponent , canActivate: [AuthGuard]},
  {path: 'create', component: CreateComponent , canActivate: [AuthGuard]},
  {path: 'edit', component: EditComponent , canActivate: [AuthGuard]},
  {path: 'approve', component: ApprovalComponent , canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
