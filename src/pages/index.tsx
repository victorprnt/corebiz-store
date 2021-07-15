import Head from 'next/head';

import { ProductCard } from 'components/ProductCard';
import { Header } from 'components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <h1>Home</h1>
      <ProductCard />
    </>
  );
}
