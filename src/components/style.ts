import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 216px;
  height: 353px;

  background-color: #E6E8EA;

  img {
    width: 216px;
    height: 200px;
  }

`;

export const ProductInfo = styled.div`
  height: 153px;
  width: 216px;

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
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #7a7a7a;
  }

  .current-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #000;
  }

  .installment {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;

    color: #7a7a7a;
  }

  button {
    width: 125px;
    height: 32px;

    color: #fff;
    font-weight: 700;

    background-color: #000;
    border-radius: 5px;

  }
`;
