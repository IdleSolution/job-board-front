import styled from 'styled-components';

export const Container = styled.div`
    background-color: #F6F7F8;
    width: 50%;
    height: 10rem;
    border-radius: 7px;
    margin: 1rem 0;
    padding: 1rem;
    position: relative;
    cursor: pointer;
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
    background-color: #202C39;
    color: #fff;
    padding: .5rem;
    border-radius: 100px;
    margin: 0 .3rem;
`

export const MoreTag = styled.div`

`
