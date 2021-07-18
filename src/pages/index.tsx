import Head from 'next/head';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Newsletter } from 'components/Newsletter';
import { ProductSection } from 'components/ProductSection';
import { Carousel } from 'components/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Carousel />

      <ProductSection />

      <Newsletter />
      <Footer />
    </>
  );
}
