import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {baseURL} from "../api/baseURL";

export const fetchBeats = createAsyncThunk('beats/fetchBeats', async () => {
	const response = await axios.get(`/beats`)
	return response.data
})
export const fetchBeatById = createAsyncThunk('beats/fetchBeatById', async (beatId) => {
	const response = await axios.get(`/beats/${beatId}`)
	return response.data
})

export const beatsSlice = createSlice({
	name: 'beats',
	initialState: {
		beats: [],
		currentBeat: undefined,
		status: 'idle',
		error: null
	},
	reducers: {
		addBeat: (state, action) => {
			state.beats.push(action.payload);
		},
		updateBeat: (state, action) => {
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
		[fetchBeats.rejected]: (state, action) => {
			state.status = 'failed'
			state.error = action.error.message;
		},
		[fetchBeatById.pending]: (state, action) => {
			state.status = 'pending';
		},
		[fetchBeatById.fulfilled]: (state, action) => {
			state.status = 'completed';
			state.currentBeat = action.payload
		},
		[fetchBeatById.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		}
	}
})


// selector to get the beats from the store.
export const selectAllBeats = state => state.beats.beats;
export const selectBeatById = (state, beatId) =>
	state.beats.beats.find(beat => beat.id === beatId)
;
export const selectBeatsStatus = state => state.beats.status;
export const selectCurrentBeat = state => state.beats.currentBeat;

export const {addBeat, updateBeats} = beatsSlice.actions;

export default beatsSlice.reducer;
