import { useMediaQuery } from 'react-responsive';

import { ProductCard } from 'components/ProductCard';
import theme from 'styles/theme/light';
import * as S from './style';

export function ProductSection() {
  return (
    <S.ProductSectionWrapper>
      <ProductCarousel />
    </S.ProductSectionWrapper>
  );
}

function ProductCarousel() {
  const smallScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.mobileL})`,
  });

  return (
    <S.ProductCarouselWrapper>
      <div className="carousel-container">
        <h1>Mais Vendidos</h1>
        <div
          className="bottom"
          style={{ borderBottom: '5px solid #C0C0C0', width: '3rem' }}
        />
        <div className="carousel">
          {smallScreen ? (
            <>
              <ProductCard />
              <ProductCard />
            </>
          ) : (
            <>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </>
          )}
        </div>
      </div>
    </S.ProductCarouselWrapper>
  );
}
