import styled from "styled-components";

export const NewsletterWrapper = styled.section`
  height: 146px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font: 700 1rem "Lato", sans-serif;

  h1 {
    margin-bottom: 1rem;
  }

  input {
    width: 240px;
    height: 48px;
    padding: 1rem;
    margin-right: 0.5rem;

    border: none;
    border-radius: 5px;

    &::placeholder {
      font: 700 12px "Lato", sans-serif;
      line-height: 14px;
      color: #585858;
    }
  }

  button {
   width: 140px;
   height: 48px;

   font: 700 14px "Lato", sans-serif;
   line-height: 14px;
   color: #fff;
   background-color: #000;

   border-radius: 5px;
  }
`;
