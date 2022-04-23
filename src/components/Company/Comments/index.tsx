import { Container, Input, CommentsContainer, SingleCommentContainer, CommentInformation, CommentContent } from './style'
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../../context/LoginContext";
import {IComment} from "../../../common/interfaces/Comment.interface";
import axios from "axios";
import {DateTime} from "luxon";

interface IProps {
    id: number,
    type: 'interview' | 'review',
}

export const Comments: React.FC<IProps> = ({id, type}) => {
    const endpoint = type === 'interview' ? 'InterviewsComments' : 'ReviewsComments'
    const [user] = useContext(UserContext);
    const [comments, setComments] = useState<IComment[]>([]);
    const [commentContent, setCommentContent] = useState('');

    useEffect(() => {
        (async () => {
            const { data } = await axios.get<IComment[]>(`http://localhost:5000/api/${endpoint}/${id}`);
            data.sort((a, b) => {
                return new Date(b.issued).getTime() - new Date(a.issued).getTime();
            })
            setComments(data);
        })();
    }, [])

    const onCommentChange = (event: any) => {
        const value = event.target.value;
        setCommentContent(value);
    }

    const onSubmit = async () => {
        const time = new Date().toISOString();

        const fakeComment: IComment = {
            //@ts-ignore
            creatorEmail: user,
            message: commentContent,
            issued: time,
        }
        const newComments = [fakeComment, ...comments];
        setComments(newComments);
        await axios.post(`http://localhost:5000/api/${endpoint}/${id}`, {
            creatorEmail: user,
            message: commentContent,
            issued: time,
        } , { withCredentials: true });
        setCommentContent('');
    }

    const onDelete = async (id: number) => {
        const newComments = comments.filter(x => x.id !== id);
        setComments(newComments);
        await axios.delete(`http://localhost:5000/api/${endpoint}/${id}`, { withCredentials: true });
    }

    return (
        <Container>
            <CommentsContainer>
                {comments.length === 0 ? (
                    <p style={{textAlign: 'center', fontWeight: '700'}}>Brak komentarzy</p>
                ) : (
                    <></>
                )}
                {comments.map(comment => (
                    <SingleCommentContainer>
                        <CommentInformation>
                            <p>{comment.creatorEmail}</p>
                            <p>{DateTime.fromISO(comment.issued).setLocale('pl').toFormat('dd MMMM yyyy hh:mm:ss')}</p>
                            {comment.creatorEmail === user && (
                                <p onClick={() => onDelete(comment.id)} style={{color: 'rgb(105,131,250)', cursor: 'pointer'}}>Usuń</p>
                            )}
                        </CommentInformation>
                        <CommentContent>{comment.message}</CommentContent>
                    </SingleCommentContainer>
                ))}
            </CommentsContainer>
            <Input>
                {user ? (
                    <>
                        <textarea placeholder={`Skomentuj jako ${user}...`} onChange={onCommentChange} value={commentContent}/>
                        <p style={{cursor: 'pointer'}} onClick={onSubmit}>Skomentuj</p>
                    </>
                ) : <p>Musisz być zalogowany żeby skomentować!</p>}

            </Input>
        </Container>
    )
}