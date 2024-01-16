import { createSlice } from '@reduxjs/toolkit'

export const ShowSlice = createSlice({
    name: 'Showing',
    initialState: false,
    reducers: {
        Showing: (state, action) => {
            return state = true;
        },
        Hide: (state, action) => {
            return state = false;
        }
    },
})

export default ShowSlice.reducer;
export const { Showing, Hide } = ShowSlice.actions;
