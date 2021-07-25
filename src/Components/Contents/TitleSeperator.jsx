import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
	titleHr: { marginTop: "0.5em", width: "100%" },
	titleRow: {
		textAlign: "start",
		fontWeight: "bolder",
		textTransform: "uppercase",
		margin: "1.5em 0em",
	},
	title: {
		paddingRight: "1rem",
	},
});

const Seperator = (props) => {
	const { title } = props;
	const styles = useStyles();
	return (
		<div className={styles.titleRow}>
			<div className={styles.title}>{title}</div>
			<Divider className={styles.titleHr} />
		</div>
	);
};

export default Seperator;
