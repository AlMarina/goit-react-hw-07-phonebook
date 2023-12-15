import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  // blacklist: ['isLoading', 'error'],
};

const rootReducer = {
  contactStore: persistReducer(contactsConfig, contactsReduser),
  filterStore: filterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
