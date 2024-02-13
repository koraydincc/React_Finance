import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedLeague: null,
};

export const leagueSlice = createSlice({
    name: 'league',
    initialState,
    reducers: {
        setSelectedLeague: (state, action) => {
            state.selectedLeague = action.payload;
            console.log(state.selectedLeague)
        }
    }
});

export const { setSelectedLeague } = leagueSlice.actions;

export default configureStore({
    reducer: {
        league: leagueSlice.reducer
    }
});
