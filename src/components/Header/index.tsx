import { ProductContext } from 'components/context/productContext';
import { useContext } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import theme from 'styles/theme/light';
import * as S from './style';

export function Header() {
  const { cartProducts } = useContext(ProductContext);

  const smallScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.mobileL})`,
  });

  return smallScreen ? (
    <S.HeaderWrapper>
      <div className="menu">
        <FiMenu size="20px" color={theme.colors.gray} />
        <img src="/images/logo-corebiz-preto-cinza.png" alt="logo" />
        <div className="cart">
          <FiShoppingCart size="20px" color={theme.colors.gray} />
          <span className="product-count">{cartProducts.length}</span>
        </div>
      </div>

      <div className="search">
        <input type="search" placeholder="O que está procurando?" />
        <FiSearch size="20px" color={theme.colors.gray} />
      </div>
    </S.HeaderWrapper>
  ) : (
    <S.HeaderWrapper>
      <img src="/images/logo-corebiz-preto-cinza.png" alt="logo" />
      <div className="search">
        <input type="search" placeholder="O que está procurando?" />
        <FiSearch size="20px" color={theme.colors.gray} />
      </div>

      <div className="user">
        <FiUser size="20px" color={theme.colors.gray} />
        <span>Minha Conta</span>
      </div>

      <div className="cart">
        <FiShoppingCart size="20px" color={theme.colors.gray} />
        <span className="product-count">{cartProducts.length}</span>
      </div>
    </S.HeaderWrapper>
  );
}
