import { VFC } from "react";
import { PokedexTemplate } from "@components/templates/pokedexTemplate";
import Typography from "@material-ui/core/Typography";
import { Box, createStyles, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			maxWidth: 800,
			height: 428,
			position: "relative",
			margin: "32px auto 0",
			padding: 20,
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
			backgroundRepeat: "repeat"
		},
		link: {
			margin: "0 0 0 12px"
		}
	})
);

/**
 * Top Page
 * @constructor
 */
export const Index: VFC = () => {
	const classes = useStyles();

	return (
		<PokedexTemplate>
			<>
				<Typography variant="h2">使用パッケージ</Typography>
				<Box mt={15} mx="auto">
					<a
						href="https://github.com/obake-fe/pokedex2"
						target="_blank"
						rel="noreferrer"
					>
						<Box display="inline-flex" justifyContent="center">
							<img
								alt="github"
								width="32px"
								height="32px"
								src={`${process.env.PUBLIC_URL}/images/github.png`}
							/>
							<p className={classes.link}>
								https://github.com/obake-fe/pokedex2
							</p>
						</Box>
					</a>
				</Box>
				<Paper className={classes.paper}>
					<img
						alt="flow_image"
						width="657px"
						height="388px"
						src={`${process.env.PUBLIC_URL}/images/flow_image.png`}
					/>
				</Paper>
			</>
		</PokedexTemplate>
	);
};
