import React, {useState} from 'react';

import Image from 'next/image'
import plantchart from 'public/img/plant-chart.png';
import { TextForm } from '@/components/Form';
import { Button } from '@/components/Button';

const LoginPage = () => {
  
  return (
    <main>
      <section className="mb-12">
        <div className="grid grid-cols-2 place-items-center">
          <div className='flex items-center justify-center py-2 px-5'>
            <Image src={plantchart} alt='plantimage'/>
          </div>
          <div>
            <div className='text-center py-4'>
              <h1 className='font-poppins-medium text-4xl'>WELCOME!</h1>
              <p className='text-poppins text-off-gray'>Please Login into Your Account.</p>
            </div>
            <TextForm label='Email' inputText='Enter your email' isDisabled={false}/>
            <TextForm label='Password' inputText='Enter your password' isDisabled={false}/>
            <div className='text-right'>
              <a class="inline-block align-baseline font-poppins-bold text-sm text-gray-500" href="/forgot-pass">
                Forgot Password
              </a>
            </div>
            <Button className="mt-3 w-full rounded-full">Sign In</Button>
            <div className='text-center'>
              <span className='font-poppins text-xs text-fadeblack'>Don't have an account? Please sign up </span>
              <a class="inline-block align-baseline font-poppins-bold text-xs text-main-green hover:text-main-green" href="/register">
                here
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default LoginPage;
