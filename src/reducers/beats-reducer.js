import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../api/baseURL";

export const fetchBeats = createAsyncThunk('beats/fetchBeats', async () => {
	const response = await axios.get(`${baseURL}/beats`)
	return response.data
})

export const beatsSlice = createSlice({
	name: 'beats',
	initialState: {
		beats: [],
		status: 'idle',
		error: null
	},
	reducers: {
		addBeat: (state, action) => {
			state.beats.push(action.payload);
		},
		updateBeat: (state,action) => {
			state.beats = action.payload;
		}
	},
	extraReducers: {
		[fetchBeats.pending]: (state, action) => {
			state.status = 'pending'
		},
		[fetchBeats.fulfilled]: (state, action) => {
			state.status = 'completed';
			state.beats = state.beats.concat(action.payload);
		},
		[fetchBeats.rejected]: (state,action) => {
			state.status = 'failed'
			state.error =  action.error.message;
		}
	}
})


// selector to get the beats from the store.
export const selectAllBeats = state => state.beats.beats;
export const selectBeatById = (state, songId) => state.beats.beats.find(song => song.id === songId);
export const selectBeatsStatus = state => state.beats.status;

export const { addBeat, updateBeats } = beatsSlice.actions;

export default beatsSlice.reducer;
