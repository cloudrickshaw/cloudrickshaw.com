import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const SocialLink = () => {
	const handleClick = (link) => {
		// #TODO Use select case here if linkedin is added
		window.open(`https://${link}.com/cloudrickshaw`);
	};

	return (
		<div className="social-links">
			<IconButton
				aria-label="Twitter"
				onClick={() => handleClick("twitter")}
				style={{ height: "24px" }}
			>
				<TwitterIcon />
			</IconButton>
			<IconButton
				aria-label="Facebook"
				onClick={() => handleClick("facebook")}
				style={{ height: "24px" }}
			>
				<FacebookIcon />
			</IconButton>
			{/* <IconButton aria-label="LinkedIn" style={{ height: "24px" }}>
				<LinkedInIcon />
			</IconButton> */}
			<IconButton
				aria-label="Github"
				onClick={() => handleClick("github")}
				style={{ height: "24px" }}
			>
				<GitHubIcon />
			</IconButton>
		</div>
	);
};

export default SocialLink;
