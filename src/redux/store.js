import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook/phonebookSlice';
import { authReducerPersisted } from './auth/authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: authReducerPersisted,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: [
          'payload.headers',
          'payload.config.transformRequest.0',
          'payload.config.transformResponse.0',
          'payload.config.env.FormData',
          'payload.config.env.Blob',
          'payload.config.validateStatus',
          'payload.config.headers',
          'payload.request',
          'payload.timestamp',
        ],
        ignoredPaths: [],
      },
    }),
});

export const persistor = persistStore(store);
