import { Component, OnInit } from '@angular/core';
import { Store } from '../store/approval.store';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { Observable } from 'rxjs';
import { Approval } from '../approval/approval';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'ons-page[app-approval-form]',
  templateUrl: './approval-form.component.html',
  styleUrls: ['./approval-form.component.css']
})
export class ApprovalFormComponent implements OnInit {
  approval$: Observable<Approval>;
  constructor(private params: Params,
              private store: Store) { }

  ngOnInit(): void {
    this.approval$ = this.store
                         .getApprovals()
                         .pipe(
                            map(approvals => approvals.filter(approval => approval.id == this.params.data).shift())
                          );
  }

  sendApproval(isApproval:boolean){
   
  }

}
