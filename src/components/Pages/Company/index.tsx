import { CompanyHeader } from "../../Company/CompanyHeader";
import { CompanyReview } from "../../Company/CompanyReview";
import { Container } from "./style";
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { ICompany } from "../../../common/interfaces/Company.interface";
import { ICompanyPreview } from "../../../common/interfaces/CompanyPreview.interface";
import { IReview } from "../../../common/interfaces/Review.interface";
import { IInterview } from "../../../common/interfaces/Interview.interface";
import { CompanyInterview } from "../../Company/CompanyInterview";
import Spinner from "../../Spinner";


export const Company = (props: any) => {
    const [company, setCompany] = useState<ICompanyPreview>();
    const [reviews, setReviews] = useState<IReview[]>([]);
    const [interviews, setInterviews] = useState<IInterview[]>([]);
    const [page, setPage] = useState<'reviews' | 'interviews'>('reviews');

    const { name } = useParams();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:5000/api/Companies/${name}`);
            const company: ICompanyPreview = res.data.company;
            const reviews: IReview[] = res.data.reviews;
            const interviews: IInterview[] = res.data.interviews;

            setCompany(company);
            setReviews(reviews);
            setInterviews(interviews);
          })();
    }, [])

    const removeReview = async (id: number) => {
        const newReviews = reviews.filter(x => x.id !== id);
        setReviews(newReviews);
        await axios.delete(`http://localhost:5000/api/Reviews/${id}`, { withCredentials: true });

    }

    const removeInterview = async (id: number) => {
        const newInterviews = interviews.filter(x => x.id !== id);
        setInterviews(newInterviews);
        await axios.delete(`http://localhost:5000/api/Interviews/${id}`, { withCredentials: true });

    }

    return (
        <>
        {company && reviews && interviews ? (
            <Container>
                <CompanyHeader company={company} setPage={setPage}/>
                {page === 'reviews' && reviews.map(review => (
                    <CompanyReview review={review} removeReview={removeReview}/>
                ))}
                {page === 'interviews' && interviews.map(interview => (
                    <CompanyInterview interview={interview} removeInterview={removeInterview}/>
                ))}
            </Container>
            ) : (<div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10rem'}}><Spinner /></div>)
        }
        </>
    )

}