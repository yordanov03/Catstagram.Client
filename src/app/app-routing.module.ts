import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreatecatComponent } from './createcat/createcat.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ListcatsComponent } from './listcats/listcats.component';
import { CatdeatilsComponent } from './catdetails/catdetails.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'createcat', component: CreatecatComponent, canActivate: [AuthGuardService] },
  { path: 'mycats', component: ListcatsComponent },
  { path: 'catdetails/:id', component: CatdeatilsComponent, canActivate: [AuthGuardService] },
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
