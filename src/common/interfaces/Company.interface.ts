import { ICompanyPreview } from "./CompanyPreview.interface";
import { IInterview } from "./Interview.interface";
import { IReview } from "./Review.interface";

export interface ICompany extends ICompanyPreview {
    reviews: IReview[],
    interviews: IInterview[],
}