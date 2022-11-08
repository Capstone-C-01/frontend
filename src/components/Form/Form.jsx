import classNames from '@/utils/classNames';
import React from 'react';
import { BaseCard } from '../Card';
import { Button } from '../Button';

const Form = ({ formTitle, desc, className, label1, label2, label3, label4, label5, inputText1, inputText2, inputText3, inputText4, inputSelect, ...props }) => {
  return (
    <BaseCard className="flex transition-shadow" {...props}>
      <div className="text mx-auto flex flex-col w-full justify-center">
        <p className="font-dm-sans-bold justify-center text-base text-fadeblack">{formTitle}</p>
        <p className="font-dm-sans-bold text-sm text-off-gray">{desc}</p>
        <div className='flex flex-wrap -mx-3 mb-2 mt-3'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label1}</label>
            <input className='appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'>{inputText1}</input>
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label2}</label>
            <input className='appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'>{inputText2}</input>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2 mt-3'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label3}</label>
            <input className='appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'>{inputText3}</input>
          </div>
          <div className='w-1/2 md:w-1/2 px-3'>
            <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label4}</label>
            <input className='appearance-none block w-full bg-white text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' type='text'>{inputText4}</input>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2 mt-3'>
          <div className='md:w-1/2 px-3'>
          <label className='block tracking-wide font-dm-sans-bold text-sm text-fadeblack'>{label5}</label>

              <div class="flex">
                  <select id="countries" class="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:bg-white focus:border-gray-500 block w-full p-2.5">
                    <option selected>Select</option>
                    <option value="option1">5</option>
                    <option value="option2">10</option>
                    <option value="option3">15</option>
                    <option value="option4">20</option>
                  </select>
                <p className='px-3 mt-3 font-dm-sans-regular text-sm text-fadeblack'>seconds, </p>
                <p className='mt-3 px-3 font-dm-sans-regular text-sm text-fadeblack'>every</p>
                <select id="countries" class="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg focus:bg-white focus:border-gray-500 block w-full p-2.5">
                    <option selected>Select</option>
                    <option value="option1">5</option>
                    <option value="option2">10</option>
                    <option value="option3">15</option>
                    <option value="option4">20</option>
                </select>
                <p className='px-3 mt-3 font-dm-sans-regular text-sm text-fadeblack'>seconds</p>
              </div>


            
          </div>

        </div>
        <Button className="w-min">Save</Button>
      </div>
    </BaseCard>
  );
};

export default Form;
