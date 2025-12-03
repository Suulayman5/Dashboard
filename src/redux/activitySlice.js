// activitySlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],        // Holds the activity data
  loading: false,  // Loading state for data fetching
  error: null,     // Error state if fetching fails
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    fetchActivityData: (state) => {
      state.loading = true;
    },
    fetchActivityDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchActivityDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error)
    },
  },
});

export const {
  fetchActivityData,
  fetchActivityDataSuccess,
  fetchActivityDataFailure,
} = activitySlice.actions;

export default activitySlice.reducer;
