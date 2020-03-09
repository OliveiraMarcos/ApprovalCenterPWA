import { Category } from '../category/category';

export interface Approval{
    id: string;
    subject: string;
    description: string;
    isApproval: boolean;
    justification: string;
    category: Category;
    categoryId: string;
    emailApproval: string;
    dateCreate: Date;
    dateApproval: Date;
    dateRead: Date;
}