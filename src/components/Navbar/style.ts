import styled from 'styled-components';
import theme from './../../common/colors';

export const Container = styled.div`
  width: 100%;
  height: 1rem;
  background-image: linear-gradient(to right, rgb(101, 133, 252) , rgb(230, 53, 196));

  display: flex;
  align-items: center;
  padding: 2rem 0;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;

  h1 {
    margin-left: 2rem;
    color: #fff;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.8rem;
  }
`

export const UserButtons = styled.div`
  margin-right: 2rem;
  display: flex;
`

export const UserButton = styled.div`
  color: rgb(250, 207, 68);
  padding: .5rem 2rem;
  border: 1px solid rgb(232, 136, 124);
  margin: 0 .5rem;
  cursor: pointer;
  
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