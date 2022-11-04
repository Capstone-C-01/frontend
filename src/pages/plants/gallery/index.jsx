import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import { CardGallery } from '@/components/Card';
import { HeaderText } from '@/components/Text';

const PlantGalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1667487230916-05f14fdbec5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      alt: 'Temp Image'
    },
    {
      src: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      alt: 'Temp Image'
    },
    {
      src: 'https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      alt: 'Temp Image'
    },
    {
      src: 'https://images.unsplash.com/photo-1667471728450-c3a75d76ff82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      alt: 'Temp Image'
    },
    {
      src: 'https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      alt: 'Temp Image'
    },
    {
      src: 'https://images.unsplash.com/photo-1667339406161-c7374c35749c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80',
      alt: 'Temp Image'
    }
  ];

  const handleCardGalleryClick = (index) => {
    setPhotoIndex(() => index);
    if (!isOpen) setIsOpen(() => true);
  };

  return (
    <main>
      <HeaderText title="Plant Gallery" />

      <div className="image-gallery grid-main-3 grid gap-y-6">
        {images.map((item, index) => {
          return (
            <CardGallery
              className="cursor-pointer transition-shadow hover:ring-2"
              key={index}
              imageAlt={item.alt}
              imageUrl={item.src}
              title={`Day ${index + 1}`}
              onClick={() => handleCardGalleryClick(index)}
            />
          );
        })}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          onCloseRequest={() => setIsOpen(() => false)}
          onMovePrevRequest={() =>
            setPhotoIndex(() => (photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setPhotoIndex(() => (photoIndex + 1) % images.length)}
          onImageLoad={() => {
            window.dispatchEvent(new Event('resize'));
          }}
        />
      )}
    </main>
  );
};

export default PlantGalleryPage;
