import { Approval } from '../approval/approval';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from 'src/app/account/services/result/result';
import * as ons from 'onsenui';

export interface State{
    Approvals: Approval[];
}

const state: State = {
    Approvals: []
}

export class Store {
    
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    /**
     * getApprovals
     */
    public getApprovals() : Observable<Approval[]>{
        return this.store
                   .pipe(
                       map(store => store.Approvals)
                   );
    }

    set(name: string, state: any) {

        this.subject.next({
            ...this.value, [name]: state
        });
    }

    private showToast(msg:string):void {
        ons.notification.toast(msg, {timeout: 2000});
    }
    
}