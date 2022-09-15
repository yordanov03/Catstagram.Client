import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatecatComponent } from './createcat/createcat.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ListcatsComponent } from './listcats/listcats.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'createcat', component: CreatecatComponent, canActivate: [AuthGuardService] },
  { path: 'mycats', component: ListcatsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
