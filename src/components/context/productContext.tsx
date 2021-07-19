import { createContext, ReactNode, useEffect, useState } from 'react';
import { getProducts } from 'services/productServices';

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextData {
  products: ProductProps[];

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
  installments: InstallmentsProps;
}

interface InstallmentsProps {
  quantity: number;
  value: number;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider(
  { children }: ProductProviderProps,
  productsProps,
) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  async function fetchProducts() {
    const { data } = productsProps;
    setProducts(data);
  }

  function handleSetProducts(data) {
    setProducts(data);
  }

  useEffect(() => {}, []);

  return (
    <ProductContext.Provider
      value={{ products, fetchProducts, handleSetProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}
