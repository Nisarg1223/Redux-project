import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        query:"",
        activeTab:'Photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
              state.query = action.payload;
        },
        setActiveTabs(state,action){
              state.activeTab = action.payload;
            
        },
        setLoading(state,action){
            state.loading = true;
            state.error = null;
        },
        setResults(state,action){
             state.results = action.payload;
             state.loading = false;
        },
        setError(state,action){
             state.error = action.payload;
             state.loading = false;
        },
        clearResults(state){
        state.results = []
        }

    }
})

export const{setQuery,setActiveTabs,setLoading,setResults,setError,clearResults} = searchSlice.actions;
export default searchSlice.reducer;