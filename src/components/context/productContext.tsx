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
  isNewsletterAvailable: boolean;

  updateCartProducts: (product: ProductProps) => void;
  updateNewsletterList: (name: string, email: string) => void;
  updateIsNewsletterAvailable: (isAvailable: boolean) => void;
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

interface NewsletterProps {
  name: string;
  email: string;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider(
  { children }: ProductProviderProps,
  productsProps,
) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cartProducts, setCartProducts] = useState<ProductProps[]>([]);
  const [newsletterList, setNewsletterList] = useState<NewsletterProps[]>([]);
  const [isNewsletterAvailable, setIsNewsletterAvalable] = useState(true);

  function updateCartProducts(product: ProductProps) {
    setCartProducts([...cartProducts, product]);
  }

  function updateNewsletterList(name: string, email: string) {
    setNewsletterList([...newsletterList, { name, email }]);
  }

  function updateIsNewsletterAvailable(isAvailable: boolean) {
    setIsNewsletterAvalable(isAvailable);
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

  useEffect(() => {
    console.log(newsletterList);
  }, [newsletterList]);

  return (
    <ProductContext.Provider
      value={{
        products,
        cartProducts,
        isNewsletterAvailable,
        updateCartProducts,
        updateNewsletterList,
        updateIsNewsletterAvailable,
        fetchProducts,
        handleSetProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
