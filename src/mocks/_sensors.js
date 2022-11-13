import moment from 'moment';
import { boolean } from './boolean';
import { percent, ph, price } from './number';

export const sensorsData = [...Array(20)].map((item, index) => ({
  _id: '636a08914376141f08b39b53' + index,
  user_id: 'user_id-dev',
  device_id: 'device_id-dev',
  lamp_status: boolean[index],
  water_level: percent[index],
  ph_data: ph[index],
  tds_data: price[index] * 10,
  createdAt: moment('2022-11-08T07:43:13.510Z').add(index, 'minute').toISOString(),
  updatedAt: '2022-11-08T07:43:13.510Z',
  __v: 0
}));
