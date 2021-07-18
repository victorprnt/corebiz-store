import { useMediaQuery } from 'react-responsive';

import * as S from './style';
import theme from 'styles/theme/light';

export function Carousel() {
  const smallScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.mobileL})`,
  });

  return (
    <S.CarouselWrapper>
      <div className="banner">
        {smallScreen ? (
          <img src="/images/carousel-banner-small.png" alt="banner" />
        ) : (
          <img src="/images/carousel-banner.png" alt="banner" />
        )}
        <div className="text">
          <p>Olá, o que você está {smallScreen && <br />} buscando?</p>
          <h1>
            Criar ou migrar seu <br />
            e-commerce?
          </h1>
        </div>
      </div>
    </S.CarouselWrapper>
  );
}
