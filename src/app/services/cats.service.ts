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
private createCatPath = environment.apiUrl + 'cats/create'
private myCatsPath = environment.apiUrl + 'cats/mycats'
  constructor(private http: HttpClient) { }

  createCat(data): Observable<Cat>{
    return this.http.post<Cat>(this.createCatPath, data)
  }

  getCats(): Observable<Array<Cat>>{
    return this.http.get<Array<Cat>>(this.myCatsPath);
  }
}
