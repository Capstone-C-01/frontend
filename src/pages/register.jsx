import React, {useState} from 'react';

import Image from 'next/image'
import plantchart from 'public/img/plant-chart.png';
import { HeaderText } from '@/components/Text';
import { TextForm } from '@/components/Form';
import { Button } from '@/components/Button';

const RegisterPage = () => {
  
  return (
    <main>
      <section className="mb-12">
        <div className="grid grid-cols-2 place-items-center">
          <div className='flex items-center justify-center py-2 px-5'>
            <Image src={plantchart} alt='plantimage'/>
          </div>
          <div>
            <div className='text-center py-4'>
              <h1 className='font-poppins-medium text-4xl'>CREATE AN ACCOUNT</h1>
              <p className='text-poppins text-off-gray'>Create your account by filling the form below.</p>
            </div>
            <TextForm label='Name' inputText='Enter your name' isDisabled={false}/>
            <TextForm label='Email' inputText='Enter your Email' isDisabled={false}/>
            <TextForm label='Password' inputText='Create your password' isDisabled={false}/>
            <Button className="mt-4 w-full rounded-full">Sign Up</Button>
            <div className='text-center'>
              <span className='font-poppins text-xs text-fadeblack'>Have already an account? Sign in </span>
              <a class="inline-block align-baseline font-poppins-bold text-xs text-main-green hover:text-main-green" href="/login">
                here
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default RegisterPage;
