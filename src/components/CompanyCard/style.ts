import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    width: 90%;
    height: 10rem;
    margin-bottom: .5rem;
    padding: 1rem;
    position: relative;
    cursor: pointer;
    border: 1px solid #9fa2a6;
    border-radius: 6px;

    &:hover {
        box-shadow: 0 8px 10px 0 #9fa2a6;
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
    background-color: #56494C;
    color: #fff;
    padding: .5rem;
    border-radius: 100px;
    margin: 0 .3rem;
`
