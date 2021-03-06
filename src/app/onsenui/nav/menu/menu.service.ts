import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  pages={};
  subject = new Subject();
  get menu$(): Observable<any> {
    return this.subject.asObservable();
  }

  open() {
    this.subject.next();
  }

  load(page){
    this.subject.next(this.pages[page]);
  }
}
