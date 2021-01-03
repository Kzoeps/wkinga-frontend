import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		beats: []
	},
	reducers: {
		addBeat: {
			reducer (state, action) {
				state.beats.push(action.payload.id)
			},
			prepare (beatId) {
				return {
					payload: {
						id: beatId
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
		}
	}
})

export const selectCart = state => state.cart.beats;

export const { addBeat, removeBeat } = cartSlice.actions;

export default cartSlice.reducer;
