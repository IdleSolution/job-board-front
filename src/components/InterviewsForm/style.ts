import styled from 'styled-components';

export const Container = styled.div`
    width: 60%;
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    margin-top: 3rem;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 2rem;
    font-size: .8rem;

`

export const AllInputsContainer = styled.div`
  width: 30%;
  margin: 0 auto;
`

export const SingleInputContainer = styled.div`
`

export const Input = styled.input`
    width: 100%;
    padding: .5rem 1rem;
    box-sizing: border-box;
`

export const TagAndScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Select = styled.select`
  width: 8rem;
  -webkit-appearance: button;
  -moz-appearance: button;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  border: 1px solid #AAA;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #555;
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const DateContainer = styled.div`
`

export const SubmitButton = styled.span`
  padding: .5rem 4rem;
  background-color: #639cd9;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`