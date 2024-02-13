import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { footballApi } from './apis/footballApi'

export const store = configureStore({
    reducer: {
        [footballApi.reducerPath]: footballApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(footballApi.middleware)
});

setupListeners(store.dispatch)

export const {useFetchLeaguesQuery} = footballApi