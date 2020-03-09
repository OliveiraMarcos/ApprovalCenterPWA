import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from 'src/app/account/services/result/result';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Store } from '../store/approval.store';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http: HttpClient, private store:Store) { }

  getAll<T>(): Observable<Result<T>>{
    return this.http
               .get<Result<T>>(`${environment.apiUrl}/api/approval`)
               .pipe(tap(next => this.store.set('Approvals',next.data))) 
  }

  post<T>(obj: T, action:string):Observable<Result<T>>{
    return this.http
               .post<Result<T>>(`${environment.apiUrl}/api/approval/${action}`,obj)
  }
}
