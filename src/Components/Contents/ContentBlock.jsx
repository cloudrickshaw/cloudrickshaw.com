import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Seperator from "./TitleSeperator";

const useStyles = makeStyles({
	pContent: {
		paddingLeft: "0.7rem",
		textAlign: "justify",
	},
	bulletRow: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	bulletIcon: {
		height: "0.5rem",
		paddingRight: "0.5rem",
	},
});

const ContentBlock = ({ title, content }) => {
	const styles = useStyles();
	return (
		<>
			<Seperator title={title} />
		  {
            Array.isArray(content) ? (
              content.map((text) => <BulletPoint text={text} key={text}/>)
			) : (
				<div className={styles.pContent}>{content}</div>
			)
          }
		</>
	);
};

const BulletPoint = ({ text }) => {
	const styles = useStyles();
	return (
		<div className={styles.bulletRow}>
			<ArrowForwardIosIcon className={styles.bulletIcon} />
			{text}
		</div>
	);
};

export default ContentBlock;
