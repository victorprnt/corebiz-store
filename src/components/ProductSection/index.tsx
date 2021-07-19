import { useMediaQuery } from 'react-responsive';
import { useContext, useEffect, useState } from 'react';

import { ProductCard } from 'components/ProductCard';
import * as S from './style';
import theme from 'styles/theme/light';
import { ProductContext } from 'components/context/productContext';

interface ProductPropsData {
  products: ProductProps[];
}

interface ProductProps {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: [
    {
      quantity: number;
      value: number;
    },
  ];
}

export function ProductSection({ products }: ProductPropsData) {
  const smallScreen = useMediaQuery({
    query: `(max-width: ${theme.screenSize.mobileL})`,
  });

  return (
    <S.ProductSectionWrapper>
      <div className="carousel-container">
        <h1>Mais Vendidos</h1>
        <div
          className="bottom"
          style={{ borderBottom: '5px solid #C0C0C0', width: '3rem' }}
        />
        <div className="carousel">
          {smallScreen ? (
            <>
              {products.slice(0, 2).map(product => {
                return (
                  <ProductCard
                    key={product.productId}
                    productId={product.productId}
                    productName={product.productName}
                    imageUrl={product.imageUrl}
                    listPrice={product.listPrice}
                    price={product.price}
                    stars={product.stars}
                    installmentQuantity={product.installments[0].quantity}
                    installmentValue={product.installments[0].value}
                  />
                );
              })}
            </>
          ) : (
            <>
              {products.map(product => {
                return (
                  <ProductCard
                    key={product.productId}
                    productId={product.productId}
                    productName={product.productName}
                    imageUrl={product.imageUrl}
                    listPrice={product.listPrice}
                    price={product.price}
                    stars={product.stars}
                    installmentQuantity={
                      product.installments.length > 0 &&
                      product.installments[0].quantity
                    }
                    installmentValue={
                      product.installments.length > 0 &&
                      product.installments[0].value
                    }
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </S.ProductSectionWrapper>
  );
}
