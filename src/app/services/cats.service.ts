import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Cat } from '../models/cat';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
private catPath = environment.apiUrl + 'cats/create'
  constructor(private http: HttpClient,
    private authService: AuthService) { }

  createCat(data: Observable<Cat>){
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<Cat>(this.catPath, data, {headers})
  }
}
