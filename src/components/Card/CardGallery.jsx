import React from 'react';
import PropTypes from 'prop-types';
import BaseCard from './BaseCard';
import Image from 'next/image';

const CardGallery = ({ title, imageAlt, imageUrl, ...props }) => {
  return (
    <BaseCard {...props}>
      <div>
        <h2 className="mb-4 text-center font-dm-sans-bold">{title}</h2>

        <div className="relative h-32 w-full">
          <Image
            src={imageUrl}
            alt={imageAlt}
            placeholder="blur"
            blurDataURL={'true'}
            fill
            className="overflow-clip rounded-md object-cover"
          />
        </div>
      </div>
    </BaseCard>
  );
};

CardGallery.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string
};

export default CardGallery;
