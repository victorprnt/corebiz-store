import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import light from 'styles/theme/light';

import * as S from './style';

export function Header() {
  return (
    <S.HeaderWrapper>
      <img src="/images/logo-corebiz-preto-cinza.png" alt="logo" />
      <div className="search">
        <input type="search" placeholder="O que está procurando?" />
        <FiSearch size="20px" color={light.colors.gray} />
      </div>

      <div className="user">
        <FiUser size="20px" />
        <span>Minha Conta</span>
      </div>

      <div className="cart">
        <FiShoppingCart size="20px" />
        <span className="product-count">1</span>
      </div>
    </S.HeaderWrapper>
  );
}
