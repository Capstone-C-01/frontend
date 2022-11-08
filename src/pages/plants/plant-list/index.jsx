import React from 'react';

import { CardWithButton, CradWithButton } from '@/components/Card';
import { Button } from '@/components/Button';
import { HeaderText } from '@/components/Text';
import { TextForm } from '@/components/Form';

const PlantsPage = () => {
  const images = [
    {
      src: '/img/bokchoy.png',
      alt: 'Temp Image'
    },
    {
      src: '/img/lettuce.png',
      alt: 'Temp Image'
    },
    {
      src: '/img/spinach.png',
      alt: 'Temp Image'
    },
  ];
  return (
    <main>
      <HeaderText
        title="List of Plants"
        subTitle="Choose your plant"
      />

      <section className="chemical-charts mb-12">
        <div className="grid-main-3">
          <CardWithButton title="Bokchoy" desc="Ready to harvest 45 to 60 days" buttonText="Plant Now" isDisabled={false} imageUrl={images[0].src}/>
          <CardWithButton title="Lettuce" desc="Ready to harvest 24 to 32 days" buttonText="Plant Now" isDisabled={true} imageUrl={images[1].src}/>
          <CardWithButton title="Spinach" desc="Ready to harvest 37 to 45 days" buttonText="Plant Now" isDisabled={true} imageUrl={images[2].src}/>
        </div>
      </section>
      <section>
        <div>
          <TextForm label='Email' inputText='Enter your email'/>
        </div>
      </section>
    </main>
  );
};

export default PlantsPage;
