import React from 'react';
import PropTypes from 'prop-types';
import { BaseCard } from '.';
import { Button } from '../Button';

const CardIconButton = ({ title, desc, icon: Icon, buttonText1, buttonText2, isDisabled, ...props }) => {
  return (
    <BaseCard className="flex transition-shadow hover:ring-2" {...props}>
      {!isDisabled ? (
        <>
          <div className="text mx-auto flex flex-col items-center justify-center">
            <p className="font-dm-sans-bold text-base text-fadeblack">{title}</p>
            <div className="icon relative my-3">{Icon && <Icon />}</div>
            <div class="flex items-center justify-center mb-2">
                <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    <Button className="rounded-r inline-block bg-sky-400 font-medium text-xs leading-tight hover:bg-sky-500 focus:bg-sky-400 focus:outline-none focus:ring-0 active:bg-sky-600 transition duration-150 ease-in-out">{buttonText1}</Button>
                    <Button className="rounded-l inline-block bg-sky-400 font-medium text-xs leading-tight hover:bg-sky-500 focus:bg-sky-400 focus:outline-none focus:ring-0 active:bg-sky-600 transition duration-150 ease-in-out">{buttonText2}</Button>
                </div>
            </div>
            <p className="text-center font-dm-sans text-xs text-gray-500">{desc}</p>
          </div>
        </>
      ) : (
        <>
            <div className="text mx-auto flex flex-col items-center justify-center">
                <p className="font-dm-sans-bold text-base text-fadeblack">{title}</p>
                <div className="icon relative my-3">{Icon && <Icon />}</div>
                <div class="flex items-center justify-center">
                    <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                        <Button className="rounded-l inline-block px-6 py-2.5 cursor-not-allowed bg-gray-400 opacity-50 text-black">{buttonText1}</Button>
                        <Button className="inline-block px-6 py-2.5 cursor-not-allowed bg-gray-400 opacity-50 text-black">{buttonText2}</Button>
                    </div>
                </div>
                <p className="font-dm-sans-bold text-sm text-fadeblack">{desc}</p>
            </div>
        </>
      )}
    </BaseCard>
  );
};

CardIconButton.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  buttonText1: PropTypes.string,
  buttonText2: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default CardIconButton;
