import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: '@modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
