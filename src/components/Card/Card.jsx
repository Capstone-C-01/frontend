import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, description, link }) => {
  return (
    <div className="styles.card m-4 max-w-[300px] rounded-[10px] border-[1px] border-slate-200 p-6 text-left text-inherit transition-colors duration-150 ease-linear hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600 active:border-blue-600 active:text-blue-600">
      <a href={link}>
        <h2 className="mb-4 text-2xl leading-none">{title}</h2>
        <p className="m-0 text-xl leading-6">{description}</p>
      </a>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
};

export default Card;
