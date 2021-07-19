import { createContext, ReactNode, useEffect, useState } from 'react';
import { getProducts } from 'services/productServices';
import {
  getSelectedProductsFromLocalStorage,
  storeSelectedProducts,
} from 'utils/userPersitedProducts';

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  products: ProductProps[];
  cartProducts: ProductProps[];

  updateCartProducts: (product: ProductProps) => void;
  fetchProducts: () => void;
  handleSetProducts: (any) => void;
}

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

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider(
  { children }: ProductProviderProps,
  productsProps,
) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);

  function updateCartProducts(product: ProductProps) {
    setCartProducts([...cartProducts, product]);
  }

  async function fetchProducts() {
    const { data } = productsProps;
    setProducts(data);
  }

  function handleSetProducts(data) {
    setProducts(data);
  }

  useEffect(() => {
    console.log(cartProducts);
    setCartProducts(getSelectedProductsFromLocalStorage());
    console.log(cartProducts);
  }, []);

  useEffect(() => {
    storeSelectedProducts(cartProducts);
  }, [cartProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        cartProducts,
        updateCartProducts,
        fetchProducts,
        handleSetProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
