import { Layout } from '@/components/Layout';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/tailwind.css';
import 'react-image-lightbox/style.css';
import { AuthGuard } from 'src/guard';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <title>Sistem Kebun Otomatis | Capstone 2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
    </>
  );
}
