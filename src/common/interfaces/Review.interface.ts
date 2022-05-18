export interface IReview {
    id: number;
    rating: number,
    position: string,
    comment: string,
    from: string,
    to: string,
    issued: string,
    tag: string,
    isStillWorking: boolean,
    creatorEmail: string,
    type?: string,
}