import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { TextForm } from '@/components/Form';
import { Button } from '@/components/Button';

import plantchart from 'public/img/plant-chart.png';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/signup`, formData)
      .then((res) => {
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
              <h1 className="font-poppins-medium text-4xl">CREATE AN ACCOUNT</h1>
              <p className="text-poppins text-off-gray">
                Create your account by filling the form below.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <TextForm
                id="username"
                type="text"
                label="Name"
                inputText="Enter your name"
                isDisabled={false}
                onChange={handleChange}
              />
              <TextForm
                id="email"
                type="email"
                label="Email"
                inputText="Enter your Email"
                isDisabled={false}
                onChange={handleChange}
              />
              <TextForm
                id="password"
                type="password"
                label="Password"
                inputText="Create your password"
                isDisabled={false}
                onChange={handleChange}
              />
              <Button className="mt-4 w-full rounded-full">Sign Up</Button>
              <div className="text-center">
                <span className="font-poppins text-xs text-fadeblack">
                  Have already an account? Sign in{' '}
                </span>
                <Link
                  class="inline-block align-baseline font-poppins-bold text-xs text-main-green hover:text-main-green"
                  href="/login"
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

RegisterPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default RegisterPage;
