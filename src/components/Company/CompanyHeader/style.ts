import styled from 'styled-components';
import theme from '../../../common/colors';

interface IProps {
    active: boolean
}

export const Container = styled.div`
    background-color: #fff;
    padding: 1.5rem 2rem 6rem 2rem;
    border-radius: 7px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    h1 {
        margin-right: .7rem;
    }
`

export const Section = styled.div`

`

export const Navbar = styled.div`
    display: flex;
    position: absolute;
    bottom: 1%;
    box-sizing: content-box;
    align-items: center;
    width: 100%;

`

export const NavbarItem = styled.div<IProps>`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  
    :first-of-type {
      border-right: 1px solid #dcdee0;
    }


    border-bottom: 3px solid ${props => props.active ? `${theme.light}` : 'transparent'};
    width: 7rem;


    cursor: pointer;
    padding: 1rem 0 .5rem 0;

    p:first-of-type {
        font-weight: bold;
    }

    p {
        margin: 0;
    }

    :hover {
        background-color: #dcdee0;
    }
`

export const NavbarItemActive = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #dcdee0;
    border-bottom: 3px solid ${theme.light};
    cursor: pointer;
    padding: 1rem 0 .5rem 0;
    width: 7rem;


    p:first-of-type {
        font-weight: bold;
    }

    p {
        margin: 0;
    }

    :hover {
        background-color: #dcdee0;
    }
`

export const RatingContainer = styled.div`
    font-size: 1rem;
    display: flex;
    align-items: center;
    bottom: 0;
    p {
        transform: translateY(2px);
    }
`

export const NameRating = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonsContainer = styled.div`
    position: absolute;
    bottom: 20%;
    right: 5%;
`

export const Button = styled.button`
    background-color: rgb(230, 53, 196);
    color: #fff;
    text-decoration: none;
    display: inline-block;
    padding: .6rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-right: 1rem;
`