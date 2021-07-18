import styled from "styled-components";

import theme from "styles/theme/light"

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 213px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;

  .location {
    color: #fff;
    margin-right: 250px;

    h1 {
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;

      padding-bottom: 1rem;

      margin-bottom: 1.5rem;
    }

    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 14px;

      & + p {
        margin-top: 0.5rem;
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-right: 250px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 195px;
      height: 2rem;

      font-weight: 600;
      font-size: 12px;
      line-height: 12px;

      background-color: #fff;
      border-radius: 5px;

      & + button {
        margin-top: 1.5rem;
      }

      svg {
        margin-right: 1rem;
      }
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${theme.screenSize.laptop}) {
  }
  @media (max-width: ${theme.screenSize.tablet}) {
  }
  @media (max-width: ${theme.screenSize.mobileL}) {
    min-height: 320px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .location {
      color: #fff;
      margin: 0;
      margin-bottom: 2rem;
    }

    .contact {
      margin: 0;
      margin-bottom: 2rem;
    }
  }
`;
