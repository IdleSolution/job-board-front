import styled from 'styled-components';
import theme from './../../common/colors';

export const Container = styled.div`
    width: 100%;
    height: 1rem;
    background-color: ${theme.dark};
    display: flex;
    align-items: center;
    padding: 2rem 0;
    border-bottom: 1px solid #000;

    p {
        margin-left: 2rem;
        color: #fff;
        cursor: pointer;
    }
`

export const NavigationContainer = styled.div`
    width: 100%;
    height: .5rem;
    background-color: ${theme.dark};
    padding: 2rem 0;
    border-bottom: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: space-around;

`

export const NavigationGroup = styled.div`
    display: flex;
    align-items: center;

`

export const SingleNavigation = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.4rem;
    margin: 0 1rem;
    cursor: pointer;

    p {
        margin-left: .5rem;
    }

`

export const SingleNavigationActive = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.4rem;
    margin: 0 1rem;
    cursor: pointer;

    p {
        margin-left: .5rem;
    }
    border-bottom: 1px solid #fff;
`

export const ButtonCreateReview = styled.button`
    background-color: ${theme.light};
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: .6rem 1rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 5px;
`