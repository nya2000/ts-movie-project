import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from 'src/components/store/authSlice';
import modalReducer from 'src/components/store/modalSlice';
import moviesReducer from 'src/components/store/movieSlice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['modal'],
};

const rootReducer = combineReducers({
    movies: moviesReducer,
    authentication: authReducer,
    modal: modalReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
