import { VFC } from "react";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { descType } from "@utils/createDescArray";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { EnhancedPokeImg } from "@containers/atoms/PokeImg";
import {
	Paper,
	createStyles,
	makeStyles,
	Box,
	Container
} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			maxWidth: 800,
			minHeight: 428,
			position: "relative",
			margin: "auto",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
			backgroundRepeat: "repeat"
		},
		box: {
			maxWidth: 800,
			minHeight: 428,
			padding: "12px 40px 0",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
			backgroundRepeat: "repeat"
		},
		dataContainer: {
			display: "flex"
		},
		descFlex: {
			marginTop: "20px"
		},
		ListWrapper: {
			width: 440
		},
		simpleWrapper: {
			width: "100%"
		}
	})
);

export type Props = {
	pokeData: normalizedPokeDataType;
	DescArray: descType[];
	statsArray: number[];
	graph: boolean;
	simple: boolean;
	children?: JSX.Element;
};

export const DataCard: VFC<Props> = ({
	pokeData,
	DescArray,
	statsArray,
	graph,
	simple,
	children
}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			<Box id="target-component" className={classes.box}>
				{pokeData.name && (
					<>
						{children}
						<EnhancedPokeImg no={pokeData.id} />
						<Box
							className={classNames(
								classes.dataContainer,
								simple && classes.descFlex
							)}
						>
							<Container
								className={classNames(
									classes.ListWrapper,
									simple && classes.simpleWrapper
								)}
							>
								<DescriptionList
									data={DescArray}
									testId={`descId-${pokeData.id}`}
								/>
							</Container>
							{graph && <StatsRadarChart data={statsArray} />}
						</Box>
					</>
				)}
			</Box>
		</Paper>
	);
};
