import { Divider } from "@material-ui/core";
import "./style.css";

const Seperator = (props) => {
	const { title } = props;
	return (
		<div className="seperator-title">
			{title} <Divider style={{ marginTop: "0.5em", width: '100%' }} />
		</div>
	);
};

export default Seperator;
