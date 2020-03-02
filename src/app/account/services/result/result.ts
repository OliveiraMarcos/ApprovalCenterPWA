export interface Result<T>{
    success:boolean;
    errors:string[];
    data:T;
}