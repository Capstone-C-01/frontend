import React from 'react';

import HomeIcon from '../Icons/HomeIcon';
import ReportIcon from '../Icons/ReportIcon';
import SettingIcon from '../Icons/SettingIcon';
import PlantIcon from '../Icons/PlantIcon';

import classNames from '@/utils/classNames';
import Link from 'next/link';

const Sidebar = ({ className, ...props }) => {
  const sidebarItem = [
    {
      text: 'Dashboard',
      link: '/',
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
    <div className={classNames(className)} {...props}>
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
  );
};

export default Sidebar;
