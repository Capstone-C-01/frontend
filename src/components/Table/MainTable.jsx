import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

import classNames from '@/utils/classNames';

const MainTable = ({ columnsList, dataList, className, ...props }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'pH',
        accessor: 'ph'
      },
      {
        Header: 'TDS',
        accessor: 'tds'
      },
      {
        Header: 'Water Level',
        accessor: 'water_level'
      },
      {
        Header: 'Light Status',
        accessor: 'light_status'
      },
      {
        Header: 'Time',
        accessor: 'time'
      }
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        ph: '6.87',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.17',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.67',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      },
      {
        ph: '6.37',
        tds: '800ppm',
        water_level: '45%',
        light_status: 'On',
        time: 'May 4, 2020'
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <table
      {...getTableProps()}
      className={classNames(
        'w-full overflow-clip rounded-md font-dm-sans drop-shadow-lg',
        className
      )}
    >
      <thead className="h-10 bg-paleblue font-dm-sans-medium text-xs">
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, index) => (
              <th key={index} {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr className="h-14 bg-white text-center text-sm" key={index} {...row.getRowProps()}>
              {row.cells.map((cell, index) => {
                return (
                  <td key={index} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

MainTable.propTypes = {
  columnsList: PropTypes.array.isRequired,
  dataList: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default MainTable;
