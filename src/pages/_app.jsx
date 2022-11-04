import { Layout } from '@/components/Layout';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/tailwind.css';
import 'react-image-lightbox/style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sistem Kebun Otomatis | Capstone 2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
