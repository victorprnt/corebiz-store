import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Newsletter } from 'components/Newsletter';
import { ProductSection } from 'components/ProductSection';
import { Carousel } from 'components/Carousel';
import {
  ProductContext,
  ProductProvider,
} from 'components/context/productContext';
import { getProducts } from 'services/productServices';
import { useContext, useState } from 'react';

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
  installments: InstallmentsProps;
}

interface InstallmentsProps {
  quantity: number;
  value: number;
}

export default function Home({ products }: ProductPropsData) {
  return (
    <ProductProvider>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Carousel />

      <ProductSection products={products} />

      <Newsletter />
      <Footer />
    </ProductProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data, status } = await getProducts();
  const products = data;

  return {
    props: {
      products,
    },
  };
};
