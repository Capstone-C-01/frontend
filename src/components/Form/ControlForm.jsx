import classNames from '@/utils/classNames';
import React from 'react';
import { BaseCard } from '../Card';
import { Button } from '../Button';

const Form = ({
  formTitle,
  desc,
  className,
  id1,
  id2,
  id3,
  id4,
  label1,
  label2,
  label3,
  label4,
  label5,
  inputText1,
  inputText2,
  inputText3,
  inputText4,
  inputSelect,
  duration,
  interval,
  onChange,
  onSubmit,
  ...props
}) => {
  return (
    <BaseCard className="flex transition-shadow" {...props}>
      <form onSubmit={onSubmit} className="text mx-auto flex w-full flex-col justify-center">
        <p className="justify-center font-dm-sans-bold text-base text-fadeblack">{formTitle}</p>
        <p className="font-dm-sans-bold text-sm text-off-gray">{desc}</p>
        <div className="-mx-3 mb-2 mt-3 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label1}
            </label>
            <input
              id={id1}
              className="mb-3 block w-full appearance-none rounded border bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              onChange={onChange}
              defaultValue={inputText1}
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label2}
            </label>
            <input
              id={id2}
              className="mb-3 block w-full appearance-none rounded border  bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              onChange={onChange}
              defaultValue={inputText2}
            />
          </div>
        </div>
        <div className="-mx-3 mb-2 mt-3 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label3}
            </label>
            <input
              id={id3}
              className="mb-3 block w-full appearance-none rounded border  bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              onChange={onChange}
              defaultValue={inputText3}
            />
          </div>
          <div className="w-1/2 px-3 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label4}
            </label>
            <input
              id={id4}
              className="mb-3 block w-full appearance-none rounded border  bg-white py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
              type="number"
              onChange={onChange}
              defaultValue={inputText4}
            />
          </div>
        </div>
        <div className="-mx-3 mb-2 mt-3 flex flex-wrap">
          <div className="px-3 md:w-1/2">
            <label className="block font-dm-sans-bold text-sm tracking-wide text-fadeblack">
              {label5}
            </label>

            <div class="flex">
              <select
                onChange={onChange}
                id="spray_duration"
                class="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-700 focus:border-gray-500 focus:bg-white"
              >
                <option selected={duration === 5} value={5}>
                  5
                </option>
                <option selected={duration === 10} value={10}>
                  10
                </option>
                <option selected={duration === 15} value={15}>
                  15
                </option>
                <option selected={duration === 20} value={20}>
                  20
                </option>
              </select>
              <p className="font-dm-sans-regular mt-3 px-3 text-sm text-fadeblack">seconds, </p>
              <p className="font-dm-sans-regular mt-3 px-3 text-sm text-fadeblack">every</p>
              <select
                id="spray_interval"
                onChange={onChange}
                class="block w-full rounded-lg border border-gray-200 bg-white p-2.5 text-sm text-gray-700 focus:border-gray-500 focus:bg-white"
              >
                <option selected={interval === 5} value={5}>
                  5
                </option>
                <option selected={interval === 10} value={10}>
                  10
                </option>
                <option selected={interval === 15} value={15}>
                  15
                </option>
                <option selected={interval === 20} value={20}>
                  20
                </option>
              </select>
              <p className="font-dm-sans-regular mt-3 px-3 text-sm text-fadeblack">seconds</p>
            </div>
          </div>
        </div>
        <Button className="my-4 w-min">Save</Button>
      </form>
    </BaseCard>
  );
};

export default Form;
