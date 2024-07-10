import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/';

export const fetchEmployees = createAsyncThunk(
    'employee/fetchEmployees',
    async () => {
        try {
            const response = await axios.get(`${apiUrl}/getAllEmployee`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const geSingleRecord = createAsyncThunk(
    'employee/geSingleRecord',
    async (empid) => {
        try {
            const response = await axios.get(`${apiUrl}/getSingle/${empid}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const deleteEmp = createAsyncThunk(
    'employee/deleteEmp',
    async (employeeId) => {
        try {
            await axios.delete(`${apiUrl}/deleteEmployee/${employeeId}`);
            return employeeId;
        } catch (error) {
            throw error;
        }
    }
);

const initialState = {
    employees: [],
    loading: false,
    error: null
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        createEmp: (state, action) => {
            state.employees.push(action.payload);
            axios.post(`${apiUrl}/create`, action.payload)
                .then(response => {
                    console.log('Employee created successfully:', response);
                })
                .catch(error => {
                    console.error('Error creating employee:', error);
                });
        },

        updateEmployee: (state, action) => {
            // alert('hii')
            const { firstName, lastName, email, date_of_birth } = action.payload;
            const { empid } = action.payload;
            const data = { firstName, lastName, email, date_of_birth };

            axios.put(`${apiUrl}/update/${empid}`, data)
                .then(response => {
                    console.log('Employee updated successfully:', response);
                })
                .catch(error => {
                    console.error('Error updating employee:', error);
                });
        }
    },

    extraReducers: builder => {
        builder
            .addCase(fetchEmployees.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = action.payload;
            })
            .addCase(fetchEmployees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(geSingleRecord.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(geSingleRecord.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = action.payload;
            })
            .addCase(geSingleRecord.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteEmp.fulfilled, (state, action) => {
                state.employees = state.employees.filter(emp => emp.id !== action.payload);
            })
            .addCase(deleteEmp.rejected, (state, action) => {
                state.error = action.error.message;
            });
    }
});

export const { createEmp, updateEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
