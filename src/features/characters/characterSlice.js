import {createSlice} from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'characters',
    initialState: ['First state', 'lemon'],
    reducers: {

    }
});

export default characterSlice.reducer;