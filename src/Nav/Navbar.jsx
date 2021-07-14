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
						<Button style={{ fontWeight: "bolder", color: "black" }}>
							HOME
						</Button>
					</div>
					<div className="nav-item">
						<Button style={{ fontWeight: "bolder", color: "black" }}>
							F.A.Q
						</Button>
					</div>
					<div className="nav-item">
						<Button
							style={{ fontWeight: "bolder", color: "black" }}
							onClick={redirectCalendly}
						>
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
