import { ProductContext } from 'components/context/productContext';
import React, { FormEvent, useContext, useState } from 'react';
import * as S from './style';

export function Newsletter() {
  const [inputNameError, setInputNameError] = useState('');
  const [inputEmailError, setInputEmailError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const {
    isNewsletterAvailable,
    updateIsNewsletterAvailable,
    updateNewsletterList,
  } = useContext(ProductContext);

  function handleNewsletterUpdate(event: FormEvent) {
    event.preventDefault();
    !name
      ? setInputNameError('Preencha com seu nome completo')
      : setInputNameError('');
    !email
      ? setInputEmailError('Preencha com com um e-mail válido')
      : setInputEmailError('');

    if (name && email) {
      updateNewsletterList(name, email);

      setName('');
      setEmail('');
      updateIsNewsletterAvailable(!isNewsletterAvailable);
    }
  }

  function handleUpdateIsNewsletterAvailable() {
    updateIsNewsletterAvailable(!isNewsletterAvailable);
  }

  return isNewsletterAvailable ? (
    <S.NewsletterWrapper
      // hasError={!!inputNameError || !!inputEmailError}
      onSubmit={handleNewsletterUpdate}
    >
      <h1>Participe de nossas news com promoções e novidades!</h1>
      <div className="form">
        <div className="input-info">
          <input
            type="text"
            className="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={event => setName(event.target.value)}
            style={{ border: inputNameError && '1px solid #C53030' }}
          />
          {inputNameError && (
            <p className="input-error">Preencha com seu nome completo</p>
          )}
        </div>

        <div className="input-info">
          <input
            type="text"
            className="email"
            placeholder="Digite seu email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            style={{ border: inputEmailError && '1px solid #C53030' }}
          />
          {inputEmailError && (
            <p className="input-error">Preencha com um e-mail válido</p>
          )}
        </div>

        <button type="submit">Eu quero!</button>
      </div>
    </S.NewsletterWrapper>
  ) : (
    <S.NewsletterDone>
      <h1>Seu e-mail foi cadastrado com sucesso!</h1>
      <p>A partir de agora você receberá as novidades e ofertas exclusivas.</p>
      <button type="submit" onClick={handleUpdateIsNewsletterAvailable}>
        Cadastrar novo e-mail
      </button>
    </S.NewsletterDone>
  );
}
