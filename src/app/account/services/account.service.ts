import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result/result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  post<T>(obj: T, action:string):Observable<Result<T>>{
    return this.http.post<Result<T>>(`${environment.apiUrl}/account/${action}`,obj);
  }
}
