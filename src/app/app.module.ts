import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatecatComponent } from './createcat/createcat.component'
import { CatsService } from './services/cats.service'
import { AuthGuardService } from './services/auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListcatsComponent } from './listcats/listcats.component';
import { CatdeatilsComponent } from './catdetails/catdetails.component';
import { EditcatComponent } from './editcat/editcat.component';
import { ErrorInterceptorService } from './services/error-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreatecatComponent,
    ListcatsComponent,
    CatdeatilsComponent,
    EditcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    CatsService, 
    AuthGuardService,
  {provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptorService,
  multi: true},
{provide: HTTP_INTERCEPTORS,
useClass: ErrorInterceptorService,
multi: true}],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
