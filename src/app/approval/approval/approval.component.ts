import { Component, OnInit } from '@angular/core';
import { Params, OnsNavigator } from 'ngx-onsenui';
import { Store } from '../store/approval.store';
import { Observable } from 'rxjs';
import { Approval } from './approval';
import { map } from 'rxjs/operators';
import { ApprovalFormComponent } from '../approval-form/approval-form.component';

@Component({
  selector: 'ons-page[app-approval]',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  approvals$: Observable<Approval[]>;
  searchText:string='';
  constructor(private params: Params,
              private store: Store, 
              private navigator: OnsNavigator) { }

  search(){
    this.approvals$ = this.store
                          .getApprovals()
                          .pipe(map(approvals => approvals.filter(approval => approval.categoryId == this.params.data && approval.subject.includes(this.searchText))));
  }

  ngOnInit(): void {
    this.approvals$ = this.store
                          .getApprovals()
                          .pipe(map(approvals => approvals.filter(approval => approval.categoryId == this.params.data)));
  }

  pushApproval(id:string):void{
    this.navigator.element.pushPage(ApprovalFormComponent,{data:id});
  }

}
