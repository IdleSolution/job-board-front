import styled from 'styled-components';
import theme from './../../common/colors';

export const Container = styled.div`
    background-color: #fff;
    height: 10rem;
    margin-bottom: .5rem;
    padding: 1.5rem 1rem 1rem 1rem;
    position: relative;
    cursor: pointer;
    border: 1px solid rgb(196, 196, 196);
    border-radius: 6px;

    &:hover {
        box-shadow: 0 1px 2px 0 #284dc7;
    }
`

export const Title = styled.div`
    font-size: 2rem;
`

export const Rating = styled.div`
    position: absolute;
    right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

export const RatingNumber = styled.p`
    font-weight: bold;

`

export const Tags = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
`

export const Tag = styled.div`
    background-color: rgb(105, 131, 250);
    color: #fff;
    padding: .5rem;
    border-radius: 100px;
    margin-right: .6rem;
    padding: .5rem 1rem;
    font-size: 0.9rem;
`
