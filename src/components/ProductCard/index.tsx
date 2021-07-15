import * as S from './style';
import { FaStar, FaRegStar } from 'react-icons/fa';

export function ProductCard() {
  return (
    <S.ProductCardWrapper>
      <img
        src="https://corebiz-test.herokuapp.com/images/product-1.png"
        alt="sapato"
      />
      <S.ProductInfo>
        <p className="product-name">SAPATO</p>

        <div className="stars">
          <FaStar size="10" color="#F8475F" />
          <FaRegStar size="10" color="#F8475F" />
          <FaRegStar size="10" color="#F8475F" />
          <FaRegStar size="10" color="#F8475F" />
          <FaRegStar size="10" color="#F8475F" />
        </div>

        <p className="original-price">R$259,90</p>
        <p className="current-price">R$159,90</p>
        <p className="installment">ou em 9x de R$28,87</p>
        <button type="button">COMPRAR</button>
      </S.ProductInfo>
    </S.ProductCardWrapper>
  );
}
