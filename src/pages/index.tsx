import Head from 'next/head';

import { ProductCard } from 'components/ProductCard';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />

      <ProductCard />

      <Footer />
    </>
  );
}
