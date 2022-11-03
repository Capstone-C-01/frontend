import React from 'react';
import PropTypes from 'prop-types';
import { BaseCard } from '.';

const CardWithToggle = (props) => {
  return <BaseCard>CardWithToggle</BaseCard>;
};

CardWithToggle.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.element
};

export default CardWithToggle;
