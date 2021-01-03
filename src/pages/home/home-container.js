import Home from './home';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBeats, selectAllBeats} from "../../reducers/songsReducer";
export default function HomeContainer() {
	const dispatch = useDispatch();

	const beats = useSelector(selectAllBeats);
	const beatsStatus = useSelector(state => state.beats.status);

	useEffect(() => {
		if (beatsStatus==='idle') {
			dispatch(fetchBeats());
		}
	})
	return (
		<Home beats={ beats } beatsStatus={beatsStatus==='completed'}/>
	)
}
