import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result/result';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url:string;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:52210/account/";
  }

  post<T>(obj: T, action:string):Observable<Result<T>>{
    return this.http.post<Result<T>>(this.url+action,obj);
  }
}
