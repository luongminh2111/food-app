import {AnyAction, configureStore, ThunkAction} from '@reduxjs/toolkit';
import reducer from './reducer';
// ...

const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload.config', 'payload.request', 'error', 'meta.arg'],
            },
        })
});

export default store;
