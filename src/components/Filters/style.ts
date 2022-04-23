import styled from 'styled-components';

export const Container = styled.div`
    background-color: transparent;
    width: 50%;
    margin-top: 2rem;
`


export const Input = styled.div`
    border-bottom: 1px solid rgb(196, 196, 196);
    padding: 2rem;
  
    p {
        font-size: .8rem;
        font-weight: 0;
        margin-bottom: .4rem;
    }

    input {
      height: 2rem;
      width: 100%;
      text-indent: 1rem;
      padding: .3rem 0;
      border: 1px solid rgb(196, 196, 196);
    }
  
    input::placeholder {
        color: rbg(196, 196, 196);
    }
      
    input:focus {
        outline: none;
        border: 1px solid rgb(176, 86, 220);
    }
`

export const Tags = styled.div`
    padding: 2rem;
    border-bottom: 1px solid rgb(196, 196, 196);
  
    input {
      margin-right: 1rem;
    }

    input[type='checkbox'] {
      -webkit-appearance: none;
      width: 1.5rem;
      height: 1.5rem;
      background: white;
      border-radius: 5px;
      border: 2px solid rgb(230, 53, 196);
      cursor: pointer;
    }
  
    input[type='checkbox']:checked {
      background: #abc;
    }

`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    font-size: 1rem;
    display: flex;
    align-items: center;
    width: 25%;
    margin: .3rem 0;
  }
`