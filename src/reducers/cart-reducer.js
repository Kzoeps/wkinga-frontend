import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	beats: [],
	currentBeat: undefined
}
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addBeatToCart: {
			reducer(state, action) {
				const filtered = state.beats.filter((beat) => beat.beatId === action.payload.beatId)
				if (filtered.length === 0) {
					state.beats.push(action.payload);
				}
			},
			prepare(beatId, licenseType) {
				return {
					payload: {
						beatId,
						licenseType
					}
				}
			}
		},
		removeBeat: {
			reducer(state, action) {
				state.beats.filter((eachBeat) => eachBeat.beatId !== action.payload.beatId);
			},
			prepare(beatId) {
				return {
					payload: {
						beatId
					}
				}
			}
		},
		setCurrentBeat: {
			reducer(state, action) {
				state.currentBeat = action.payload
			}
		}
	}
})

export const selectCart = state => state.cart.beats;

export const {addBeatToCart, removeBeat, setCurrentBeat} = cartSlice.actions;

export default cartSlice.reducer;
