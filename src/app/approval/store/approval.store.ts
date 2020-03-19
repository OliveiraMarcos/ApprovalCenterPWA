import { Approval } from '../approval/approval';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from 'src/app/account/services/result/result';
import { ToastService } from 'src/app/onsenui/nav/ons/toast.service';

export interface State{
    Approvals: Approval[];
}

const state: State = {
    Approvals: []
}

export class Store {
    
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    constructor(private toast:ToastService){}

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

    
}