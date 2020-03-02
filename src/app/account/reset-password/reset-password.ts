import { Register } from '../register/register';

export interface ResetPassword extends Register{
    tokenPassword:string;
}