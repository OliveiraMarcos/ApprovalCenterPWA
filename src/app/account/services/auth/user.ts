export class User{
    userName:string;
    email:string;
    token:string;
    expiration:Date;

    constructor(user:User){
        this.expiration = new Date(user?.expiration);
        this.email = user?.email;
        this.userName = user?.userName;
        this.token = user?.token;
    }

    public get isActive():boolean{
        return this.expiration.valueOf() > new Date().valueOf();
    }
}