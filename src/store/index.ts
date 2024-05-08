'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import OnBoardingReducer from './slices/onBoarding';
import mudebuAiReducer from './slices/mudebu-ai';

const rootReducer = combineReducers({
  OnBoarding: OnBoardingReducer,
  mudebuAi: mudebuAiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
