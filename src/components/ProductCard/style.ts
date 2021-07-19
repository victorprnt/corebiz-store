import styled from "styled-components";

import theme from "styles/theme/light";

export const ProductCardWrapper = styled.div`
  width: 216px;
  max-height: 353px;

  background-color: ${theme.colors.cardBackground};

  img {
    width: 216px;
    height: 200px;
  }

  & + div {
    margin-left: 6rem;
  }

  @media (max-width: ${theme.screenSize.laptop}) { }
  @media (max-width: ${theme.screenSize.tablet}) { }
  @media (max-width: ${theme.screenSize.mobileL}) {
    width: 140px;

    background-color: rgba(0,0,0,0);

    img {
      width: 142px;
      height: 122px;
    }

    & + div {
      margin-left: 1.5rem;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  /* height: 153px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 1rem;

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
`;
