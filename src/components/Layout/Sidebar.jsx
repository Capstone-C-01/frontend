import React from 'react';
import Link from 'next/link';

import { HomeIcon, PlantIcon, ReportIcon, SettingIcon } from '../Icons';

import classNames from '@/utils/classNames';

const Sidebar = ({ className, ...props }) => {
  const sidebarItem = [
    {
      text: 'Dashboard',
      link: '/dashboard',
      icon: <HomeIcon />
    },
    {
      text: 'Reports',
      link: '/reports',
      icon: <ReportIcon />
    },
    {
      text: 'System Control',
      link: '/system-control',
      icon: <SettingIcon />
    },
    {
      text: 'Plants',
      link: '/plants',
      icon: <PlantIcon />
    }
  ];

  return (
    <div className={classNames('flex flex-col gap-x-8 gap-y-6', className)} {...props}>
      <div className="flex w-64 cursor-pointer gap-4 border-b p-6">
        <div className="h-[30px] w-[30px] rounded-full bg-gray-300" />
        <h2 className="text-lg font-bold">Apps Name</h2>
      </div>
      <div className="">
        {sidebarItem.map((item, index) => {
          return (
            <div
              className="mb-2 flex w-full cursor-pointer gap-5 px-6 py-2 transition-colors hover:rounded-md hover:bg-sky-100 hover:ring-1"
              key={index}
            >
              {item.icon}
              <Link href={item.link}>
                <p className="text-base font-bold tracking-tight">{item.text}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
