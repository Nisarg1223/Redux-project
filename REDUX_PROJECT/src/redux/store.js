import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './slice/searchSlice';
import collectionReducer from './slice/collectionSlice';
export const store = configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer
    }
});