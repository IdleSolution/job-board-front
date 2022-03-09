import styled from "styled-components";

export const StyledSpinner = styled.div`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  border: 1rem solid #f3f3f3;
  border-top: 1rem solid #3498db;
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  animation: spin 2s linear infinite;
`;
