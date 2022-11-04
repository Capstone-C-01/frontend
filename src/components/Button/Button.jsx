import React from 'react';
import PropTypes from 'prop-types';
import classNames from '@/utils/classNames';

const Button = ({ bgColor = 'main-green', children, className, ...props }) => {
  return (
    <button
      className={classNames(
        'rounded-lg py-2 px-3 font-dm-sans-bold text-sm',
        bgColor.toLowerCase() === 'main-green' &&
          'bg-main-green text-white hover:ring-1 hover:ring-green-700',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
