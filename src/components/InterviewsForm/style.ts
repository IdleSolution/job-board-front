import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    margin-top: 3rem;
    background-color: #fff;
    border-radius: 5px;
    justify-content: center;
    padding: 2rem;
    font-size: .8rem;

`

export const AllInputsContainer = styled.div`
  width: 30%;
  margin: 0 auto;
`

export const SingleInputContainer = styled.div`
    margin-bottom: 1rem;
`

export const Input = styled.input`
    width: 100%;
    padding: .5rem 1rem;
    box-sizing: border-box;
`

export const TagAndScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  height: 10rem;
  padding: 1rem 1rem;
  margin-bottom: 3rem;
`

export const DatesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`
