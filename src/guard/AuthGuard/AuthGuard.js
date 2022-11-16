import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from 'src/context/user.context';
const AuthGuard = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const token = typeof window !== 'undefined' && localStorage.getItem('session');

    axios
      .post(
        `${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/check-token`,
        { token: token },
        { withCredentials: true }
      )
      .then((res) => {
        setUser(res.data);
        setIsLoading(() => false);
      })
      .catch((err) => {
        if (router.pathname !== '/register' && router.pathname !== '/_error') {
          router.push('/login');
          setIsLoading(() => false);
        }
      });
  }, []);

  return <main>{!isLoading && children}</main>;
};

export default AuthGuard;
