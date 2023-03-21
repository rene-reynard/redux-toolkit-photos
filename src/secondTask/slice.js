import { createSlice } from '@reduxjs/toolkit';


const photoSlice = createSlice({
    name: 'photos',
    initialState : {
        imageUrls: []
    },
    reducers: {
      addImage(state, input) {
        state.imageUrls = [URL.createObjectURL(input.payload), ...state.imageUrls];
      }
    },
})


export const { addImage } = photoSlice.actions;
export default photoSlice.reducer;