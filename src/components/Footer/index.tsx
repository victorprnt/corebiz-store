import { MdHeadsetMic, MdMail } from 'react-icons/md';

import * as S from './style';

export function Footer() {
  return (
    <S.FooterWrapper>
      <div className="location">
        <h1 style={{ borderBottom: '5px solid #fff', width: '3rem' }}>
          Localização
        </h1>
        <p className="address">Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
        <p className="address">Alphavile SP</p>
        <p className="email">brasil@corebiz.ag</p>
        <p className="tel">+55 11 3090 1039</p>
      </div>

      <div className="contact">
        <button type="button">
          <MdMail color="#000" size="20" /> ENTRE EM CONTATO
        </button>
        <button type="button">
          <MdHeadsetMic color="#000" size="20" />
          FALE COM O NOSSO <br />
          CONSULTOR ONLINE
        </button>
      </div>

      <div className="logo">
        <img src="/images/logos-footer.png" alt="logos corebiz e vtex" />
      </div>
    </S.FooterWrapper>
  );
}
