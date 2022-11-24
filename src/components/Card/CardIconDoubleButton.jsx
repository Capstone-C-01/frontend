import React from 'react';
import PropTypes from 'prop-types';
import { BaseCard } from '.';
import { Button } from '../Button';

const CardIconButton = ({
  title,
  desc,
  icon: Icon,
  buttonText1,
  buttonText2,
  isDisabled,
  ...props
}) => {
  return (
    <BaseCard className="flex transition-shadow hover:ring-2" {...props}>
      {!isDisabled ? (
        <>
          <div className="text mx-auto flex flex-col items-center justify-center">
            <p className="font-dm-sans-bold text-base text-fadeblack">{title}</p>
            <div className="icon relative my-3">{Icon && <Icon />}</div>
            <div class="mb-2 flex items-center justify-center">
              <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <Button className="inline-block rounded-r bg-sky-400 text-xs font-medium leading-tight transition duration-150 ease-in-out hover:bg-sky-500 focus:bg-sky-400 focus:outline-none focus:ring-0 active:bg-sky-600">
                  {buttonText1}
                </Button>
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
                <Button className="inline-block cursor-not-allowed rounded-l bg-gray-400 px-6 py-2.5 text-black opacity-50">
                  {buttonText1}
                </Button>
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
