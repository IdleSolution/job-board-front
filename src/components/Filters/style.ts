import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    width: 30%;
    margin-left: 5%;
    margin-right: .5rem;
    border: 1px solid #9fa2a6;
    border-radius: 6px;
`

export const Header = styled.div`
    border-bottom: 1px solid #9fa2a6;
    padding: 1rem;
    font-size: 1.2rem;
`

export const Input = styled.div`
    border-bottom: 1px solid #9fa2a6;
    padding: 2rem;


    p {
        font-size: .8rem;
        font-weight: 0;
        margin-bottom: .4rem;
    }

    input {
        height: 2rem;
        width: 100%;
    }
`

export const Tags = styled.div`
    padding: 2rem;

    div {
        font-size: .8rem;
        display: flex;
        align-items: center;
    }
`