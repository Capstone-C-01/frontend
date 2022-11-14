import React, { useState, useMemo } from 'react';
import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { Toaster } from 'react-hot-toast';
import { AuthGuard } from 'src/guard';

import '../styles/globals.css';
import '../styles/tailwind.css';
import 'react-image-lightbox/style.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { UserContext } from 'src/context/user.context';
import axios from 'axios';

export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const value = useMemo(() => ({ user, setUser }), [user]);

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  axios.defaults.withCredentials = true;

  return (
    <>
      <Head>
        <title>Sistem Kebun Otomatis | Capstone 2022</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserContext.Provider value={value}>
        <AuthGuard>
          <main>
            <Toaster />
            {getLayout(<Component {...pageProps} />)}
          </main>
        </AuthGuard>
      </UserContext.Provider>
    </>
  );
}
