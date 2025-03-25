import { configureStore } from '@reduxjs/toolkit';
import navReducer from '../Features/navSlice'
import studentReducer from '../Features/studentSlice';

 export const store = configureStore({
  reducer: {
    navigation: navReducer, 
    Students: studentReducer,
  },
});