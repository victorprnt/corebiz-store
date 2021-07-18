import styled from "styled-components";

import theme from 'styles/theme/light'

export const NewsletterWrapper = styled.section`
  max-height: 146px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.sectionBackground};

  font: 700 1rem "Lato", sans-serif;

  h1 {
    margin-bottom: 1rem;
  }

  .form{
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
  }

  @media (max-width: ${theme.screenSize.laptop}) {}
  @media (max-width: ${theme.screenSize.tablet}) {}
  @media (max-width: ${theme.screenSize.mobileL}) {
    max-height: 276px;
    min-height: fit-content;
    max-width: 320;

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      input {
        width: 288px;
        margin: 0;
        margin-bottom: 1rem;
      }

      button {
        width: 288px;
      }
    }
  }
`;
