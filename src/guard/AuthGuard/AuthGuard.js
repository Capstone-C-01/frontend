import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const AuthGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' && localStorage.getItem('session');

    axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/check-token`, { token: token })
      .then((res) => {
        if (!res.status === 200) {
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          router.push('/login-temp');
        }
      });
  }, []);

  return <main>{children}</main>;
};

export default AuthGuard;
