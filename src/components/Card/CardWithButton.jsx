import React from 'react';
import PropTypes from 'prop-types';
import { BaseCard } from '.';
import { Button } from '../Button';
import Image from 'next/image';

const CardWithButton = ({ title, desc, buttonText, isDisabled, imageUrl, imageAlt, onClick, ...props }) => {
  return (
    <BaseCard className="flex transition-shadow hover:ring-2" {...props}>
      {!isDisabled ? (
        <>
          <div className="text mx-auto flex flex-col items-center justify-center">
            <p className="font-dm-sans-bold text-base text-fadeblack">{title}</p>
            <div className="relative h-24 w-full">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    placeholder="blur"
                    blurDataURL={'true'}
                    fill
                    className="overflow-clip rounded-md object-contain"
                />
            </div>
            <p className="font-dm-sans-light text-xs py-3 text-off-gray">{desc}</p>
            <Button onClick={onClick}>{buttonText}</Button>
          </div>
        </>
      ) : (
        <>
            <div className="text mx-auto flex flex-col items-center justify-center">
            <p className="font-dm-sans-bold text-base text-fadeblack">{title}</p>
            <div className="relative h-24 w-full">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    placeholder="blur"
                    blurDataURL={'true'}
                    fill
                    className="overflow-clip rounded-md object-contain"
                />
            </div>
            <p className="font-dm-sans-light text-xs py-3 text-off-gray">{desc}</p>
            <Button data-modal-toggle="defaultModal" className='cursor-not-allowed bg-gray-400 opacity-50 text-black'>{buttonText}</Button>
          </div>
          
        </>
      )}
    </BaseCard>
  );
};

CardWithButton.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default CardWithButton;
