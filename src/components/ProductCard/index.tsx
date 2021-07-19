import * as S from './style';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface ProductProps {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: InstallmentsProps;
}

interface InstallmentsProps {
  quantity: number;
  value: number;
}

export function ProductCard({
  productId,
  productName,
  stars,
  imageUrl,
  listPrice,
  price,
  installments: { quantity, value },
}: ProductProps) {
  return (
    <S.ProductCardWrapper>
      <img src={imageUrl} alt={productName} />
      <S.ProductInfo>
        <p className="product-name">{productName}</p>

        <StarsRating productId={productId} starNumber={stars} />

        <p className="original-price">R${listPrice}</p>
        <p className="current-price">R${price}</p>
        <p className="installment">
          ou em {quantity} de R${value}
        </p>
        <button type="button">COMPRAR</button>
      </S.ProductInfo>
    </S.ProductCardWrapper>
  );
}

interface StarProps {
  productId: number;
  starNumber: number;
}

function StarsRating({ productId, starNumber }: StarProps) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    starNumber <= i
      ? stars.push(<FaRegStar key={productId} size="10" color="#F8475F" />)
      : stars.push(<FaStar key={productId} size="10" color="#F8475F" />);
  }

  return <div className="stars">{stars}</div>;
}
