import { Component, OnInit } from '@angular/core';
import { Store } from '../store/approval.store';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { Observable } from 'rxjs';
import { Approval } from '../approval/approval';
import { map, first } from 'rxjs/operators';
import { ApprovalService } from '../services/approval.service';
import { ToastService } from 'src/app/onsenui/nav/ons/toast.service';

@Component({
  selector: 'ons-page[app-approval-form]',
  templateUrl: './approval-form.component.html',
  styleUrls: ['./approval-form.component.css']
})
export class ApprovalFormComponent implements OnInit {
  approval$: Observable<Approval>;
  approval:Approval;
  justification:string = '';
  isLoad:boolean;
  constructor(private params: Params,
              private store: Store,
              private approvalService: ApprovalService,
              private navigator: OnsNavigator,
              private toast:ToastService) { }

  ngOnInit(): void {
    this.isLoad = false;
    this.approval$ = this.store
                         .getApprovals()
                         .pipe(
                            map(approvals => approvals.filter(approval => approval.id == this.params.data).shift())
                          );
     this.approval$.subscribe(obj => this.approval = obj);
     this.approval.dateRead = new Date();
     this.approvalService
        .put(this.approval);
  }

  sendApproval(isApproval:boolean){
    this.isLoad = true;

    this.approval.justification = this.justification;
    this.approval.isApproval = isApproval;
    this.approval.dateApproval = new Date();
    this.approvalService
        .put(this.approval)
        .subscribe(
          result => {
            if (result.success) {
              //Go to logged page 
              this.toast.showToast('Success!');
              this.isLoad = false;
              this.navigator.element.popPage();
            } else {
              //send show errors
              result.errors.forEach(msg => {
                this.toast.showToast(msg);
                this.isLoad = false;
              });
            }
          },
          fail => {
            //show erros
            fail.error.errors.forEach(msg => {
              this.toast.showToast(msg);
              this.isLoad = false;
            });
          }
        )
  }


}
