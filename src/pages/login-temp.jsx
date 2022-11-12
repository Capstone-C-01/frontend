import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
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
      .post(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/auth/signin`, formData)
      .then((res) => {
        typeof window !== 'undefined' && localStorage.setItem('session', res.data.token);
        router.push('/dashboard');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="mx-auto max-w-lg py-20" onSubmit={handleSubmit}>
      <div class="mb-6">
        <label for="email" class="mb-2 block text-sm font-medium text-gray-900">
          Your email
        </label>
        <input
          type="email"
          id="email"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required=""
          onChange={handleChange}
        />
      </div>
      <div class="mb-6">
        <label for="password" class="mb-2 block text-sm font-medium text-gray-900">
          Your password
        </label>
        <input
          type="password"
          id="password"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required=""
          onChange={handleChange}
        />
      </div>
      <div class="mb-6 flex items-start">
        <div class="flex h-5 items-center">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            required=""
          />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
