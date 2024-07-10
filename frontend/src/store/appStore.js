import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../reducer/employeereducer';  

const store = configureStore({
    reducer: {
        employee: employeeReducer  
    }
});

export default store;
