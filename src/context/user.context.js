import { createContext } from 'react';

export const UserContext = createContext({
  user: {
    _id: '',
    username: '',
    email: '',
    device_id: ''
  },
  setUser: () => {}
});
