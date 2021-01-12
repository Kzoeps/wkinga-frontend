import Home from './home';
import { useSelector} from "react-redux";
import {selectAllBeats} from "../../reducers/beats-reducer";

export default function HomeContainer() {

	const beats = useSelector(selectAllBeats);
	const beatsStatus = useSelector(state => state.beats.status);

	return (
		<Home beats={beats} beatsStatus={beatsStatus === 'completed'}/>
	)
}
