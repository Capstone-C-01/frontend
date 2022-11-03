import React from 'react';
import PropTypes from 'prop-types';
import classNames from '@/utils/classNames';

const BaseCard = ({ className, children, ...props }) => {
  return (
    <div className={classNames('rounded-xl bg-white p-4 drop-shadow-lg', className)} {...props}>
      {children}
    </div>
  );
};

BaseCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
};

export default BaseCard;
