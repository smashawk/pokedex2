import { VFC } from "react";
import { createStyles, makeStyles, Box } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			width: 100,
			height: 100,
			margin: "auto"
		},
		pokeImg: {
			display: "none",
			width: "auto",
			height: "100%",
			filter: "drop-shadow(2px 4px 6px black)"
		},
		loadingImg: {
			display: "block",
			width: "50%",
			height: "75%",
			margin: "0 auto",
			paddingTop: "25px"
		},
		pokeImgLoading: {
			display: "block"
		}
	})
);

export type Props = {
	no: number;
	url: string;
	loading: boolean;
	imageLoaded: () => void;
};

export const PokeImg: VFC<Props> = ({ no, url, loading, imageLoaded }) => {
	const classes = useStyles(no);

	return (
		<Box className={classes.root}>
			{(no === 0 || loading) && (
				<img
					className={classNames(classes.pokeImg, loading && classes.loadingImg)}
					alt=""
					src={`${process.env.PUBLIC_URL}/images/monsterball.png`}
				/>
			)}
			<img
				className={classNames(
					classes.pokeImg,
					!loading && classes.pokeImgLoading
				)}
				onLoad={imageLoaded}
				alt=""
				src={url}
			/>
		</Box>
	);
};
