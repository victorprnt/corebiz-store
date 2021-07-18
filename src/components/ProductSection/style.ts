import styled from "styled-components";

import theme from "styles/theme/light";

export const ProductSectionWrapper = styled.main`
  width: 100%;
  padding: 4rem;

  background-color: #fff;

  @media (max-width: ${theme.screenSize.laptop}) { }
  @media (max-width: ${theme.screenSize.tablet}) { }
  @media (max-width: ${theme.screenSize.mobileL}) {
    padding: 0;
  }
`;

export const ProductCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;

  .carousel-container {
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 900;
      font-size: 1rem;
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
    h1 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
