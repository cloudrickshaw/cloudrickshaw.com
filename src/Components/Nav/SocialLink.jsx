import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
	iconButton: {
		height: "2rem",
		width: "2rem",
	},
	socialLinks: {
		display: "flex",
		justifyContent: "space-between",
		width: "12%",
	},
});

const SocialLink = () => {
	const styles = useStyles();
	const handleClick = (link) => {
		// #TODO Use select case here if linkedin is added
		window.open(`https://${link}.com/cloudrickshaw`);
	};

	return (
		<div className={styles.socialLinks}>
			<IconButton
				aria-label="Twitter"
				onClick={() => handleClick("twitter")}
				className={styles.iconButton}
			>
				<TwitterIcon />
			</IconButton>
			<IconButton
				aria-label="Facebook"
				onClick={() => handleClick("facebook")}
				className={styles.iconButton}
			>
				<FacebookIcon />
			</IconButton>
			{/* <IconButton aria-label="LinkedIn" className={styles.iconButton}>
				<LinkedInIcon />
			</IconButton> */}
			<IconButton
				aria-label="Github"
				onClick={() => handleClick("github")}
				className={styles.iconButton}
			>
				<GitHubIcon />
			</IconButton>
		</div>
	);
};

export default SocialLink;
