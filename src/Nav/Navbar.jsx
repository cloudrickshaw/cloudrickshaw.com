import SocialLink from "./SocialLink";
import "./styles.css";

const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<div className="navigations">
					<div className="nav-item">HOME</div>
					<div className="nav-item">F.A.Q</div>
					<div className="nav-item">Book an Appointment</div>
				</div>
				<SocialLink />
			</div>
			<div className="title">Cloud Rickshaw</div>
		</>
	);
};

export default Navbar;
