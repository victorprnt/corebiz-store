import * as S from './style';

export function Carousel() {
  return (
    <S.CarouselWrapper>
      <div className="banner">
        <img src="/images/carousel-banner.png" alt="banner" />
        <div className="text">
          <p>Olá, o que você está buscando?</p>
          <h1>
            Criar ou migrar seu <br />
            e-commerce?
          </h1>
        </div>
      </div>
    </S.CarouselWrapper>
  );
}
