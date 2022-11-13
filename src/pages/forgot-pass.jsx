import React, {useState} from 'react';

import Image from 'next/image'
import plantchart from 'public/img/plant-chart.png';
import { TextForm } from '@/components/Form';
import { Button } from '@/components/Button';

const ForgotPassPage = () => {
  
  return (
    <main>
      <section className="mb-12">
        <div className="grid grid-cols-2 place-items-center">
          <div className='flex items-center justify-center py-2 px-5'>
            <Image src={plantchart} alt='plantimage'/>
          </div>
          <div>
            <div className='text-center py-4'>
              <h1 className='font-poppins-medium text-4xl'>FORGOT PASSWORD?</h1>
              <p className='text-poppins text-off-gray'>Please type your email address in the form below.</p>
            </div>
            <TextForm inputText='Enter your email address' isDisabled={false}/>
            <Button className="mt-3 w-full rounded-full">Submit</Button>
            <div className='text-center'>
              <span className='font-poppins text-xs text-fadeblack'>Back to  </span>
              <a class="inline-block align-baseline font-poppins-bold text-xs text-main-green hover:text-main-green" href="/login">
                Login Page
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ForgotPassPage;
