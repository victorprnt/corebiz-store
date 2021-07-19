import styled from "styled-components";

import theme from "styles/theme/light";

export const ProductCardWrapper = styled.div`
  width: 216px;
  max-height: 353px;

  .image-container {
    width: 216px;
    position: relative;

    .discount-tag {
      width: 81px;
      position: absolute;
      top: 0;
      right: 0;
    }

    .product-image {
      width: 100%;
      /* height: 100%; */
    }
  }

  & + div {
    margin-left: 6rem;
  }

  .product-info {
    width: 100%;
    /* height: 153px; */
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .product-name {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;

      color: #7a7a7a;
    }

    .stars {
      svg {
        & + svg {
          margin-left: 0.25rem;
        }
      }
    }

    .original-price {
      height: 1rem;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1rem;

      color: #7a7a7a;
    }

    .current-price {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;

      color: #000;
    }

    .installment {
      height: 1.5rem;
      font-weight: 400;
      font-size: 11px;
      line-height: 1rem;

      color: #7a7a7a;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 125px;
      height: 32px;

      color: #fff;
      font-weight: 700;

      background-color: #000;
      border-radius: 5px;
    }
  }

  @media (min-width: ${theme.screenSize.tablet}) {
    &:hover .product-info {
      opacity: 1;
      background-color: ${theme.colors.cardBackground};
    }

    &:hover .product-info button {
      opacity: 1;
    }

    .product-info {
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.2s;

      button {
        opacity: 0;
        transition: opacity 0.2s;
      }
    }
  }

  @media (max-width: ${theme.screenSize.laptop}) { }
  @media (max-width: ${theme.screenSize.tablet}) { }
  @media (max-width: ${theme.screenSize.mobileL}) {

    max-width: 140px;

    .image-container {
      max-width: 100%;
      background-color: rgba(0,0,0,0);

      .discount-tag {
        width: 50px;
      }

      .product-image {
        width: 100%;
      }
    }


      & + div {
        margin-left: 1.5rem;
    }
  }
`;

// export const ProductInfo = styled.div`
//   width: 100%;
//   /* height: 153px; */

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;

//   padding-bottom: 1rem;

//   .product-name {
//     font-weight: 600;
//     font-size: 12px;
//     line-height: 16px;

//     color: #7a7a7a;
//   }

//   .stars {
//     svg {
//       & + svg {
//         margin-left: 0.25rem;
//       }
//     }
//   }

//   .original-price {
//     height: 1rem;
//     font-weight: 400;
//     font-size: 0.75rem;
//     line-height: 1rem;

//     color: #7a7a7a;
//   }

//   .current-price {
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 24px;

//     color: #000;
//   }

//   .installment {
//     height: 1.5rem;
//     font-weight: 400;
//     font-size: 11px;
//     line-height: 1rem;

//     color: #7a7a7a;
//   }

//   button {
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     width: 125px;
//     height: 32px;

//     color: #fff;
//     font-weight: 700;

//     background-color: #000;
//     border-radius: 5px;
//   }
// `;
