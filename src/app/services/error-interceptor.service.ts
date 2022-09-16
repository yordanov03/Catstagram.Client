import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private toastrService: ToastrService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      retry(1),
      catchError(err => {
        let message= ""
        if(err.status === 401){
          // alert("401")
          message = "token has expired or you should be logged in"
        }
        else if(err.status===404){
          //customer message
          message ="404"
        }
        else if(err.status===400){
          //
          message ="400"
        }
        else{
          //global message
          message = "Unexpected error"
        }
        this.toastrService.error(message);
        return throwError(err)
      })
    )
  }
}
