import React, {useState} from 'react';

import { HeaderText } from '@/components/Text';
import { TextForm } from '@/components/Form';
import { CardWithButton } from '@/components/Card';
import ConfigModal from '@/components/Modal/ConfigModal';

const PlantsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
          <CardWithButton onClick={() =>setModalIsOpen(true)} title="Bokchoy" desc="Ready to harvest 45 to 60 days" buttonText="Plant Now" isDisabled={false} imageUrl={images[0].src}/>
          <CardWithButton title="Lettuce" desc="Ready to harvest 24 to 32 days" buttonText="Plant Now" isDisabled={true} imageUrl={images[1].src}/>
          <CardWithButton title="Spinach" desc="Ready to harvest 37 to 45 days" buttonText="Plant Now" isDisabled={true} imageUrl={images[2].src}/>
        </div>
      </section>

      <div>
        <ConfigModal title="Configuration" desc="Configure your system" isOpen={modalIsOpen} setIsOpen={setModalIsOpen} label1='Number of Plants' label2='Spraying duration and invertal' label3='pH Minimum' label4='pH Maximum' label5='TDS Minimum (ppm)' label6='TDS Maximum (ppm)' label7='Plant Placement'/>
      </div>

    </main>
  );
};

export default PlantsPage;
