import styled from "styled-components";
import theme1 from '../../common/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`

export const PostsContainer = styled.div`
  width: 69%;
  background-color: #fff;
  margin-right: 1%;
`

export const UserCardContainer = styled.div`
  margin-left: 1%;
  margin-right: 2%;
  width: 29%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  border: 1px solid rgb(196, 196, 196);
  border-radius: 6px;
`

export const InterviewContainer = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 7px;
    padding: 1rem 0;
    position: relative;
    margin-bottom: 1rem;
    margin-left: 1%;
    display: flex;
    border: 1px solid rgb(196, 196, 196);
    border-radius: 6px; 
`

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    color: ${theme1.dark};


    p {
        transform: translateY(2px);
    }
`

export const NameRating = styled.div`
    display: flex;
    align-items: center;
    font-size: .7rem;

`

export const Content = styled.div`
    margin-left: 2rem;
    width: 100%;
`

export const WorkPeriod = styled.p`
    margin: 0;
    font-size: 0.85rem;

`

export const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
`

export const Description = styled.p`
    margin-bottom: 5rem;
    font-size: .75rem;
`

export const OwnActions = styled.div`
  display: flex;
  p {
    margin-left: 1rem; 
    color: rgb(105,131,250);
    cursor: pointer;
  }
`

export const Tag = styled.div`
    background-color: rgb(105, 131, 250);
    color: #fff;
    border-radius: 100px;
    margin-right: .6rem;
    padding: .3rem .8rem;
    font-size: 0.7rem;
`


