import { CardGallery } from '@/components/Card';
import { HeaderText } from '@/components/Text';
import React from 'react';

const PlantGalleryPage = () => {
  const images = [
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
      alt: 'Windows 10 Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
      alt: 'macOS Mojave Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
      alt: 'Android 9.0 Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
      alt: 'Windows 10 Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
      alt: 'macOS Mojave Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
      alt: 'Android 9.0 Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
      alt: 'Windows 10 Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
      alt: 'macOS Mojave Dark Mode Setting'
    },
    {
      src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
      alt: 'Android 9.0 Dark Mode Setting'
    }
  ];
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
            />
          );
        })}
      </div>
    </main>
  );
};

export default PlantGalleryPage;
