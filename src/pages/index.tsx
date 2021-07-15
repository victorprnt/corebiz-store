import Head from 'next/head';

import { ProductCard } from 'components/ProductCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Home</h1>
      <ProductCard />
    </>
  );
}
