import { Component, OnInit } from '@angular/core';
import { Store } from '../store/approval.store';
import { groupBy, mergeMap, toArray, reduce, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Approval } from '../approval/approval';
import { Category } from './category';
import { OnsNavigator } from 'ngx-onsenui';
import { ApprovalComponent } from '../approval/approval.component';

@Component({
  selector: 'ons-page[app-category]',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categorys$: Observable<Category[]>
  
  constructor(private store: Store, 
              private navigator: OnsNavigator){}

  pushDisplayApprovals(guidId:string){
    this.navigator.element.pushPage(ApprovalComponent,{data:guidId});
  }

  ngOnInit(): void {

    this.categorys$  = this.store
                     .getApprovals()
                     .pipe(
                        map(approval => {
                          let categorys = approval.reduce((res, it)=>{
                            if (!res[it.category.id]) {
                              res[it.category.id] = {};
                            }
                            res[it.category.id]['count'] = res[it.category.id]['count'] + 1 || 1;
                            res[it.category.id]['name'] = it.category.name;
                            return res;
                          },{});
                          return Object.keys(categorys).map(k => {
                            return <Category>{id: k, count: categorys[k].count, name: categorys[k].name};
                          })
                        }
                      )
                    );
  }

}
