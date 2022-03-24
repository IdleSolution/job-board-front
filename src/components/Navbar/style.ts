import styled, {keyframes} from 'styled-components';
import theme from './../../common/colors';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  background: linear-gradient(to right, rgb(101, 133, 252) , rgb(230, 53, 196));

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
  
  p {
    cursor: pointer;
  }
  z-index: 2;
`

export const UserButton = styled.div`
  color: rgb(250, 207, 68);
  padding: .5rem 2rem;
  border: 1px solid rgb(232, 136, 124);
  margin: 0 .5rem;
  cursor: pointer;
  z-index: 1000000;


`

export const UserOptions = styled.div`
  position: absolute;
  right: 0;
  width: 15%;
  bottom: 0;
  transition: z-index .5s step-end, transform .5s;
  margin-right: 1.5%;
  border: 1px solid rgb(196, 196, 196);
  border-top: 0;
  cursor: pointer;


  div {
    border-bottom: 1px solid rgb(196, 196, 196);
    height: 3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    p {
      margin-left: 1rem;
    }
  }
  
  div:last-of-type {
    border-bottom: none;
  }
`
