import * as S from './style';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useContext } from 'react';
import { ProductContext } from 'components/context/productContext';

interface ProductProps {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installmentValue?: number | null;
  installmentQuantity?: number | null;
}

export function ProductCard({
  productId,
  productName,
  stars,
  imageUrl,
  listPrice,
  price,
  installmentValue,
  installmentQuantity,
}: ProductProps) {
  const { updateCartProducts } = useContext(ProductContext);

  function handleCartProducts() {
    updateCartProducts({
      productId,
      productName,
      stars,
      imageUrl,
      listPrice,
      price,
      installmentValue,
      installmentQuantity,
    });
  }

  return (
    <S.ProductCardWrapper>
      <div className="image-container">
        {listPrice && (
          <img src="/images/img-discount.png" alt="" className="discount-tag" />
        )}
        <img src={imageUrl} alt={productName} className="product-image" />
      </div>
      <div className="product-info">
        <p className="product-name">{productName}</p>

        <StarsRating productId={productId} starNumber={stars} />

        {listPrice ? (
          <p className="original-price">
            R${(listPrice / 100).toFixed(2).replace('.', ',')}
          </p>
        ) : (
          <p className="original-price"></p>
        )}
        <p className="current-price">
          R${(price / 100).toFixed(2).replace('.', ',')}
        </p>

        {installmentQuantity ? (
          <p className="installment">
            ou em {installmentQuantity} de R$
            {(installmentValue / 100).toFixed(2).replace('.', ',')}
          </p>
        ) : (
          <p className="installment"></p>
        )}

        <button type="button" onClick={handleCartProducts}>
          COMPRAR
        </button>
      </div>
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
