import styled from "styled-components";

import theme from 'styles/theme/light'

export const NewsletterWrapper = styled.form`
  /* max-height: 146px; */
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
      display: flex;
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

    .input-error {
      font: 400 0.75rem "Lato", sans-serif;
      color: ${theme.colors.red}
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
    /* max-height: 276px; */
    min-height: fit-content;
    max-width: 320;

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .input-info{
        margin-bottom: 1rem;
        input {
          width: 288px;
          margin: 0;
        }
      }

      button {
        width: 288px;
      }
    }
  }
`;

export const NewsletterDone = styled.section`
  max-height: 146px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.sectionBackground};

  h1 {
    font: 700 1rem "Lato", sans-serif;
  }

  p {
    font: 400 0.75rem "Lato", sans-serif;
  }

  button {
    width: 328px;
    height: 48px;
    margin-top: 1rem;

    font: 700 1rem "Lato", sans-serif;
    color: #fff;
    background-color: #000;

    border-radius: 5px;
  }

`;
