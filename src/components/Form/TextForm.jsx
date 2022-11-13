import classNames from '@/utils/classNames';
import React from 'react';
import PropTypes from 'prop-types';

// const TextForm = ({label, inputText, textValue, ...props }) => {
//   return (
    
//     <div className='w-full mb-4'>
//       <label className='block tracking-wide font-poppins-bold text-sm text-fadeblack py-2'>{label}</label>
//       <input className='shadow appearance-none font-poppins text-xs rounded-full block w-full bg-white text-gray-700 border py-3 px-4 leading-tight focus:outline-none focus:bg-white' type='text' placeholder={inputText} value={textValue}></input>
//     </div>
//   );
// };

const TextForm = ({ label, inputText, textValue, isDisabled, ...props }) => {
  return (
    <div {...props}>
      {!isDisabled ? (
        <>
          <div className='w-full mb-4'>
            <label className='block tracking-wide font-poppins-bold text-sm text-fadeblack py-2'>{label}</label>
            <input className='shadow appearance-none font-poppins text-xs rounded-full block w-full bg-white text-gray-700 border py-3 px-4 leading-tight focus:outline-none focus:bg-white' type='text' placeholder={inputText} value={textValue}></input>
          </div>
        </>
      ) : (
        <>
          <div className='w-full mb-4'>
            <label className='block tracking-wide font-poppins-bold text-sm text-fadeblack py-2'>{label}</label>
            <input className='shadow appearance-none font-poppins text-xs rounded-full block w-full bg-white text-gray-700 border py-3 px-4 leading-tight focus:outline-none focus:bg-white' type='text' value={textValue} disabled></input>
          </div>
        </>
      )}
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
