import styled from 'styled-components';

export const Container = styled.div`
  width: 35%;
  height: 15rem;
`

export const Input = styled.div`
  border-top: 1px solid rgb(196, 196, 196);
  position: relative;
  padding: 1rem;
  display: flex;
  -moz-border-radius-bottomleft: 5px;
  -moz-border-radius-bottomright: 5px;
  
  p {
        font-size: .8rem;
        font-weight: 0;
        margin-left: 4%;
        color: rgb(196, 196, 196);
    }

    textarea {
      height: 3rem;
      width: 80%;
      text-indent: 1rem;
      padding: .3rem 0;
      border: 1px solid rgb(196, 196, 196);
      border-radius: 20px;
      resize: none;
      background: rgba(250, 250, 250);
      font-size: .6rem;

    }

    textarea::placeholder {
        color: rbg(196, 196, 196);
    }

    textarea:focus {
        outline: none;
        border: 1px solid rgb(180, 180, 180);
    }
`

export const CommentsContainer = styled.div`
  width: 100%;
  height: 70%;
  background: rgba(250, 250, 250);
  padding-top: 1rem;
  overflow-y: scroll;
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(230, 230, 230);
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

`

export const SingleCommentContainer = styled.div`
  margin-left: 1rem;
  font-size: .75rem;
`

export const CommentInformation = styled.div`
  display: flex;
  color: gray;
  p {
    margin-right: 1rem;
  }
  
  p:first-of-type {
    font-weight: 700;
  }
`

export const CommentContent = styled.div`
  margin-top: -10px;
  margin-bottom: .5rem;
`