import { VFC } from "react";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { descType } from "@utils/createDescArray";
import { PokeImg } from "@components/atoms/PokeImg";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { Paper, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			width: 800,
			height: 520,
			margin: "auto",
			padding: "20px 40px",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_black.png)`,
			backgroundRepeat: "repeat"
		},
		dataContainer: {
			display: "flex"
		}
	})
);

type Props = {
	pokeData: normalizedPokeDataType;
	DescArray: descType[];
	statsArray: number[];
	children?: JSX.Element;
};

export const DataCard: VFC<Props> = ({
	pokeData,
	DescArray,
	statsArray,
	children
}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper}>
			{pokeData.name && (
				<>
					{children}
					<PokeImg no={pokeData.id} />
					<div className={classes.dataContainer}>
						<DescriptionList data={DescArray} />
						<StatsRadarChart data={statsArray} />
					</div>
				</>
			)}
		</Paper>
	);
};
