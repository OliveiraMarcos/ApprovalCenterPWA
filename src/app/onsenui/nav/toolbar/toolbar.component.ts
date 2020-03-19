import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { Store } from 'src/app/approval/store/approval.store';
import { count, reduce, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastService } from '../ons/toast.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  
  approvalsCount$: Observable<Number>;

  constructor(private menuService: MenuService,
              private store: Store,
              private toast:ToastService) { }
  openMenu() {
    this.menuService.open();
  }

  ngOnInit(): void {
    this.approvalsCount$ = this.store.getApprovals().pipe(map(approvals => approvals.length));
  }

  
  goTo(page){
    this.menuService.load(page);
  }
  
}
