import React from 'react';
import PropTypes from 'prop-types';
import classNames from '@/utils/classNames';

const HeaderText = ({ title, subTitle, className, ...props }) => {
  return (
    <div className={classNames('mb-10', className)} {...props}>
      <h1 className="font-dm-sans-bold text-4xl">{title}</h1>
      <p className="text-base text-off-gray">{subTitle}</p>
    </div>
  );
};

HeaderText.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  className: PropTypes.string
};

export default HeaderText;
