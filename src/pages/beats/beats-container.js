import Beats from "./beats";
import {useSelector} from "react-redux";
import {selectAllBeats, selectBeatsStatus} from "../../reducers/beats-reducer";

export default function BeatsContainer() {

	const beats = useSelector(selectAllBeats);
	const beatsStatus = useSelector(selectBeatsStatus);

	return (
		<Beats beats={beats} beatsStatus={beatsStatus==='completed'}/>
	)
}
