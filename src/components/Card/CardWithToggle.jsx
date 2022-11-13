import React from 'react';
import PropTypes from 'prop-types';
import { BaseCard } from '.';
import Toggle from '../Button/Toggle';

const CardWithToggle = ({ title, desc, icon: Icon, onChange, checked, ...props }) => {
  return (
    <BaseCard className="flex transition-shadow hover:ring-2">
      <div className="text mx-auto flex flex-col items-center justify-center">
        <p className="font-dm-sans-bold text-base text-fadeblack">{title}</p>
        <div className="icon relative my-3">{Icon && <Icon />}</div>
        <Toggle className="items-center" checked={checked} onChange={onChange} />
        <p className="font-dm-sans text-sm text-gray-700">{desc}</p>
      </div>
    </BaseCard>
  );
};

CardWithToggle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.element
};

export default CardWithToggle;
