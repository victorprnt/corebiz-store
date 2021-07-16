import styled from "styled-components";

export const ProductSectionWrapper = styled.main`
  width: 100%;
  padding: 4rem;

  background-color: #fff;

`;

export const ProductCarouselWrapper = styled.div`
  display: flex;
  justify-content: center;

  .carousel-container {
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 900;
      font-size: 20px;
      line-height: 27px;
    }

    .carousel {
      display: flex;
      margin-top: 1.5rem;
    }
  }
`;
