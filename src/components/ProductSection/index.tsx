import { ProductCard } from 'components/ProductCard';
import * as S from './style';

export function ProductSection() {
  return (
    <S.ProductSectionWrapper>
      <ProductCarousel />
    </S.ProductSectionWrapper>
  );
}

function ProductCarousel() {
  return (
    <S.ProductCarouselWrapper>
      <div className="carousel-container">
        <h1>Mais Vendidos</h1>
        <div
          className="bottom"
          style={{ borderBottom: '5px solid #C0C0C0', width: '3rem' }}
        />
        <div className="carousel">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </S.ProductCarouselWrapper>
  );
}
