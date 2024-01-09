import { createReducer } from '@reduxjs/toolkit';
import Auth from '../auth';

const initialState = {
  token: null,
};

const tokenReducer = createReducer(initialState, builder => {
  // builder.addCase(Auth.thunks.doSignIn.fulfilled, (state, action) => {
  //   if (action.payload.data) {
  //     state.token = action.payload.data.token;
  //   }
  // });

  builder.addCase(Auth.thunks.doSignUpRecruiter.fulfilled, (state, action) => {
    if (action.payload.data) {
      const token = action.payload.data.token;
      state.token = token;
    }
  });
  builder.addCase(Auth.thunks.doSignUpCompany.fulfilled, (state, action) => {
    if (action.payload.data) {
      const token = action.payload.data.token;
      state.token = token;
    }
  });
  builder.addCase(Auth.thunks.doSignUpJobSeeker.fulfilled, (state, action) => {
    if (action.payload.data) {
      const token = action.payload.data.token;
      state.token = token;
    }
  });
});

export default tokenReducer;
