import styled from 'styled-components';
import theme1 from '../../../common/colors';

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 7px;
    padding: 2rem 0;
    position: relative;
    margin-bottom: 1rem;
    display: flex;
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

`

export const Content = styled.div`
    margin-left: 2rem;
    width: 100%;
`

export const WorkPeriod = styled.p`
    margin: 0;
    font-size: 0.85rem;

`

export const Date = styled.p`
    position: absolute;
    bottom: 0;
`

export const Description = styled.p`
    margin-bottom: 5rem;
`