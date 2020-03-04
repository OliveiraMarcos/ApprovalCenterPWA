export class User{
    userName:string;
    email:string;
    token:string;
    expiration:Date;

    public get isActive():Boolean{
        return this.expiration.valueOf() > new Date().valueOf();
    }
}