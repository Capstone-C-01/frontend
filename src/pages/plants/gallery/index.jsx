import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import { CardGallery } from '@/components/Card';
import { HeaderText } from '@/components/Text';
import { imagesPlantGallery } from 'src/mocks/_image';

const PlantGalleryPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState(imagesPlantGallery);

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
