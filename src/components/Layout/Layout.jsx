import classNames from '@/utils/classNames';
import React from 'react';
import {
  dmSans,
  dmSansBold,
  dmSansMedium,
  poppins,
  poppinsBold,
  poppinsMedium
} from '../Typography';

import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div
      className={classNames(
        poppins.variable,
        poppinsMedium.variable,
        poppinsBold.variable,
        dmSans.variable,
        dmSansMedium.variable,
        dmSansBold.variable,
        'min-h-screen bg-paleblue'
      )}
    >
      <div className="container grid grid-cols-12 gap-x-8 gap-y-6">
        <Header className="col-span-9 col-start-4 row-start-1" />
        <Sidebar className="fixed top-0 col-span-3 col-start-1 row-start-1" />
        <div className="col-span-8 col-start-4 row-start-1  pt-[104px]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
