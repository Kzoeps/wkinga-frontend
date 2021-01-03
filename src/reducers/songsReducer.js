import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
	name: 'songs',
	initialState: {
		songs: []
	},
	reducers: {
		addSong: (state, action) => {
			state.songs.push(action.payload);
		},
		updateSongs: (state,action) => {
			state.songs = action.payload;
		}
	}
})

// selector to get the songs from the store.
export const selectSongs = state => state.songs.songs;

export const { addSong, updateSongs } = songsSlice.actions;

export default songsSlice.reducer;
