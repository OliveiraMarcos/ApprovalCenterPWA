import { ForgotPassword } from '../forgot-password/forgot-password';

export interface Register extends ForgotPassword {
    username:string;
    password : string;
    confirmPassword : string;
}