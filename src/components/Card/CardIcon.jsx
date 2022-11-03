import React from 'react';
import PropTypes from 'prop-types';
import { BaseCard } from '.';

const CardIcon = ({ title, desc, icon: Icon, isVertical, ...props }) => {
  return (
    <BaseCard className="flex transition-shadow hover:ring-2" {...props}>
      {!isVertical ? (
        <>
          <div className="icon relative">{Icon && <Icon />}</div>
          <div className="text ml-5 flex flex-col justify-center">
            <p className="font-dm-sans-medium text-sm text-off-gray">{title}</p>
            <p className="font-dm-sans-bold text-lg text-fadeblack">{desc}</p>
          </div>
        </>
      ) : (
        <>
          <div className="text mx-auto flex flex-col items-center justify-center">
            <p className="font-dm-sans-bold text-base text-fadeblack">{title}</p>
            <div className="icon relative my-3">{Icon && <Icon />}</div>
            <p className="font-dm-sans-bold text-sm text-fadeblack">{desc}</p>
          </div>
        </>
      )}
    </BaseCard>
  );
};

CardIcon.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.element,
  isVertical: PropTypes.bool
};

export default CardIcon;
