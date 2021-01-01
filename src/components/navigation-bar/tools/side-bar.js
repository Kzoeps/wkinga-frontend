import {ImCross} from "react-icons/all";
import {Link} from "react-router-dom";

const SideBar = ({close, show}) => {
	return (
		<div>
			<div>
				<p>
					Wangchuk Kinga Beats
				</p>
				<ImCross onClick={close}/>
			</div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/aboutMe">About Me</Link></li>
				<li><Link to="/beats">Beats</Link></li>
				<li><Link to="/contactUs">Contact</Link></li>
				<li><Link to="/">Cart Review</Link></li>
			</ul>
		</div>
	)
}

export default SideBar;
