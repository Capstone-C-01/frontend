import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

import { TextForm } from '@/components/Form';
import { Button } from '@/components/Button';

import { UserContext } from 'src/context/user.context';

import plantchart from 'public/img/plant-chart.png';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/signin`, formData, {
        withCredentials: true
      })
      .then((res) => {
        setUser((prev) => ({
          ...prev,
          id: res.data.id,
          email: res.data.email,
          username: res.data.username
        }));
        typeof window !== 'undefined' && localStorage.setItem('session', res.data.token);
        router.push('/dashboard');
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <section className="mb-12">
        <div className="grid grid-cols-2 place-items-center">
          <div className="flex items-center justify-center py-2 px-5">
            <Image src={plantchart} alt="plantimage" />
          </div>
          <div>
            <div className="py-4 text-center">
              <h1 className="font-poppins-medium text-4xl">WELCOME!</h1>
              <p className="text-poppins text-off-gray">Please Login into Your Account.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <TextForm
                id="email"
                type="email"
                label="Email"
                inputText="Enter your email"
                isDisabled={false}
                handleChange={handleChange}
              />
              <TextForm
                id="password"
                type="password"
                label="Password"
                inputText="Enter your password"
                isDisabled={false}
                handleChange={handleChange}
              />
              <div className="text-right">
                <Link
                  class="inline-block align-baseline font-poppins-bold text-sm text-gray-500"
                  href="/forgot-pass"
                >
                  Forgot Password
                </Link>
              </div>
              <Button className="mt-3 w-full rounded-full">Sign In</Button>
              <div className="text-center">
                <span className="font-poppins text-xs text-fadeblack">
                  Don&apos;t have an account? Please sign up
                </span>
                <Link
                  class="inline-block align-baseline font-poppins-bold text-xs text-main-green hover:text-main-green"
                  href="/register"
                >
                  here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default LoginPage;
