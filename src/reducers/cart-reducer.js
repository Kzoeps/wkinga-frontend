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
			prepare(beat, licenseType) {
				const {
					id,
					beatName,
					beatProducer,
					audioURL,
					albumImage,
					trackoutLeasePrice,
					premiumLeasePrice,
					exclusivePrice,
					beatDuration,
					sold
				} = beat
				return {
					payload: {
						beatId: id,
						beatName,
						beatProducer,
						audioURL,
						albumImage,
						trackoutLeasePrice,
						premiumLeasePrice,
						exclusivePrice,
						beatDuration,
						sold,
						chosenLicenseType: licenseType
					}
				}
			}
		},
		removeBeat: {
			reducer(state, action) {
				state.beats = state.beats.filter((eachBeat) => eachBeat.beatId !== action.payload.beatId);
			},
			prepare(beatId) {
				return {
					payload: {
						beatId
					}
				}
			}
		},
		initCart: {
			reducer(state) {
				state.beats = []
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

export const {addBeatToCart, removeBeat, setCurrentBeat, initCart} = cartSlice.actions;

export const getLicensePrice = beat => {
	const licenseTypes = {
		'Trackout Lease': 'trackoutLeasePrice',
		'Premium Lease': 'premiumLeasePrice',
		'Exclusive': 'exclusivePrice'
	}
	return beat[licenseTypes[beat.chosenLicenseType]];
}
export const getTotal = beatsInCart => beatsInCart.reduce((sumPrice, currentBeat) => ({totalPrice: sumPrice.totalPrice + getLicensePrice(currentBeat)}), {totalPrice: 0})
export default cartSlice.reducer;
