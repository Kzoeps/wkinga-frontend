import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		beats: [],
		currentBeat: undefined
	},
	reducers: {
		addBeatToCart: {
			reducer (state, action) {
				debugger;
				const beat =state.beats.map((beat) => {
					debugger;
					console.log(beat);
				})
				// const beat = state.beats.filter((beat) => {
				// 	debugger;
				// 	beat.id !== action.payload.id;
				// });
				console.log(beat);
				if (!beat) {
					state.beats.push(action.payload);
				}
			},
			prepare (beatId, licenseType) {
				return {
					payload: {
						beatId,
						licenseType
					}
				}
			}
		},
		removeBeat: {
			reducer (state, action) {
				state.beats.filter((eachBeat) => eachBeat.id !== action.payload.id);
			},
			prepare (beatId) {
				return {
					payload: {
						id: beatId
					}
				}
			}
		},
		setCurrentBeat: {
			reducer (state, action) {
				state.currentBeat = action.payload
			}
		}
	}
})

export const selectCart = state => state.cart.beats;

export const { addBeatToCart, removeBeat, setCurrentBeat } = cartSlice.actions;

export default cartSlice.reducer;
