import styled from "styled-components";

import theme from "styles/theme/light"

export const CarouselWrapper = styled.section`
  width: 100%;

  .banner {
    position: relative;
    color: #fff;

    img {
      width: 100%;
    }

    .text {
      position: absolute;
      top: 25%;
      left: 20%;

      p {
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.5rem;
      }

      h1 {
        font-weight: 900;
        font-size: 3rem;
        line-height: 3rem;
      }
    }
  }

  @media (max-width: ${theme.screenSize.laptop}) { }
  @media (max-width: ${theme.screenSize.tablet}) { }
  @media (max-width: ${theme.screenSize.mobileL}) {
    .banner {
      img {
        max-width: 100%;
        /* max-height: 192px; */
      }

      .text {
        top: 20%;
        left: 5%;

        p {
          font-size: 1.5rem;
          line-height: 1.5rem;
        }

        h1 {
          font-size: 2rem;
          line-height: 2rem;
        }
      }
    }
  }
`;
