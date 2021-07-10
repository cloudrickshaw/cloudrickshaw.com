import { Button } from "@material-ui/core";
import SocialLink from "./SocialLink";
import "./styles.css";

const Navbar = () => {
	const redirectCalendly = () => {
		window.open("https://calendly.com/cloudrickshaw");
	};

	return (
		<>
			<div className="navbar">
				<div className="navigations">
					<div className="nav-item">
						<Button style={{ fontWeight: "bolder" }}>HOME</Button>
					</div>
					<div className="nav-item">
						<Button style={{ fontWeight: "bolder" }}>F.A.Q</Button>
					</div>
					<div className="nav-item">
						<Button style={{ fontWeight: "bolder" }} onClick={redirectCalendly}>
							Book an Appointment
						</Button>
					</div>
				</div>
				<SocialLink />
			</div>
			<div className="title">Cloud Rickshaw</div>
		</>
	);
};

export default Navbar;
