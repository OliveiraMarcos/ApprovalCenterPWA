import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from 'src/app/account/services/result/result';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Store } from '../store/approval.store';
import { Approval } from '../approval/approval';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(private http: HttpClient, private store:Store) { }

  getAll(): Observable<Result<Approval[]>>{
    return this.http
               .get<Result<Approval[]>>(`${environment.apiUrl}/api/approval`)
               .pipe(tap(next => this.store.set('Approvals',next.data))) 
  }

  put(obj: Approval):Observable<Result<Approval>>{
    let result = this.http
               .put<Result<Approval>>(`${environment.apiUrl}/api/approval`,obj);
    result.subscribe(ok=>{
      const value = this.store.value.Approvals;

      const approvals = value.map((approval:Approval)=>{
        if(ok.success && ok.data.id === approval.id){
          return {...approval, ...ok.data};
        }else{
          return approval;
        }
      });
      this.store.set('Approvals', approvals.filter(approval => approval.dateApproval == null));
    });
    return result;
  }
}
