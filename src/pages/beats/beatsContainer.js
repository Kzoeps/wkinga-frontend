import Beats from "./beats";
// import {useSelector, useDispatch} from "react-redux";
// import {fetchSongs, selectAllSongs} from "../../reducers/songsReducer";
// import {useEffect} from "react";

export default function BeatsContainer() {
	// const dispatch = useDispatch();
	//
	// const songs = useSelector(selectAllSongs);
	// const songsStatus = useSelector(state => state.songs.status);
	// const error = useSelector(state => state.songs.error);
	//
	// useEffect(() => {
	// 		if (songsStatus === 'idle') {
	// 			dispatch(fetchSongs())
	// 		}
	// 	}
	// )
	return (
		<Beats/>
	)
}
