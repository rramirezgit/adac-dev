'use client';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { OnboardingState } from './types';

const initialState: OnboardingState = {
  step: 0,
  contentStep: 0,
  swhoWhatsApp: false,
};

export const onBoardingSlice = createSlice({
  name: 'OnBoarding',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.step += 1;
      state.contentStep = 0;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setContentStep: (state, action: PayloadAction<number>) => {
      state.contentStep = action.payload;
    },
    setSwhoWhatsApp: (state, action: PayloadAction<boolean>) => {
      state.swhoWhatsApp = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { nextStep, prevStep, setStep, setContentStep, setSwhoWhatsApp } =
  onBoardingSlice.actions;

export default onBoardingSlice.reducer;
