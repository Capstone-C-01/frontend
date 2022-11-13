import React, {useState} from 'react';

import Image from 'next/image'
import plantchart from 'public/img/plant-chart.png';
import { HeaderText } from '@/components/Text';
import { TextForm } from '@/components/Form';
import { Button } from '@/components/Button';

const ResetPassPage = () => {
  
  return (
    <main>
      <section className="mb-12">
        <div className="grid grid-cols-2 place-items-center">
          <div className='flex items-center justify-center py-2 px-5'>
            <Image src={plantchart} alt='plantimage'/>
          </div>
          <div>
            <div className='text-center py-4'>
              <h1 className='font-poppins-medium text-4xl'>RESET PASSWORD</h1>
              <p className='text-poppins text-off-gray'>Reset your password.</p>
            </div>
            <TextForm label='Email' textValue="example@mail.com" isDisabled={true}/>
            <TextForm label='New Password' inputText='Create your new password' isDisabled={false}/>
            <TextForm label='Confirm New Password' inputText='Re-type your password' isDisabled={false}/>
            <Button className="mt-4 w-full rounded-full">Reset Password</Button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ResetPassPage;
