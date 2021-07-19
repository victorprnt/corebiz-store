import styled from "styled-components";

import theme from "styles/theme/light";

export const ProductSectionWrapper = styled.main`
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;

  background-color: #fff;

  .carousel-container {
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 900;
      font-size: 1.25rem;
      line-height: 2rem;
    }

    .carousel {
      display: flex;
      margin-top: 1.5rem;
    }
  }

  @media (max-width: ${theme.screenSize.laptop}) { }
  @media (max-width: ${theme.screenSize.tablet}) { }
  @media (max-width: ${theme.screenSize.mobileL}) {
    padding: 1rem;

    h1 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
