import styled from "styled-components";

export const CarouselWrapper = styled.section`
  max-width: 1920px;

  .banner {
    position: relative;
    color: #fff;

    img {
      width: 100%;
    }

    .text {
      position: absolute;
      top: 150px;
      left: 380px;

      p {
        font-weight: 700;
        font-size: 30px;
        line-height: 40px;
      }

      h1 {
        font-weight: 900;
        font-size: 45px;
        line-height: 45px;
      }
    }
  }

`;
