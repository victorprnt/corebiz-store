import React from 'react';
import * as S from './style';

export function Newsletter() {
  return (
    <S.NewsletterWrapper>
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <div>
        <input type="text" className="name" placeholder="Digite seu nome" />
        <input type="text" className="email" placeholder="Digite seu email" />
        <button type="submit">Eu quero!</button>
      </div>
    </S.NewsletterWrapper>
  );
}
