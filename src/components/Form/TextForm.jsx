import React from 'react';
import PropTypes from 'prop-types';

const TextForm = ({ label, id, inputText, type, isDisabled, handleChange, ...props }) => {
  return (
    <div {...props}>
      <div className="mb-4 w-full">
        <label className="block py-2 font-poppins-bold text-sm tracking-wide text-fadeblack">
          {label}
        </label>
        <input
          id={id}
          className="block w-full appearance-none rounded-full border bg-white py-3 px-4 font-poppins text-xs leading-tight text-gray-700 shadow focus:bg-white focus:outline-none"
          type={type}
          placeholder={inputText}
          onChange={handleChange}
          disabled={isDisabled}
          autoComplete={id === 'password' ? true : false}
        ></input>
      </div>
    </div>
  );
};

TextForm.propTypes = {
  label: PropTypes.string.isRequired,
  inputText: PropTypes.string,
  TextForm: PropTypes.string,
  isDisabled: PropTypes.bool
};

export default TextForm;
