import { MouseEvent as ReactMouseEvent, VFC } from "react";
import { normalizedPokeDataType } from "@store/getPokeData/reducers";
import { getPokeTypeDataType } from "@store/getPokeTypeData/reducers";
import { PokeIconList } from "@components/atoms/PokeIconList";
import { createStyles, makeStyles, Paper } from "@material-ui/core";
import { theme } from "@styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		listRoot: {
			width: "100%",
			height: "100%",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_black.png)`,
			backgroundRepeat: "repeat",
			overflowY: "scroll",
			willChange: "transform",
			"&::-webkit-scrollbar": {
				width: 10
			},
			"&::-webkit-scrollbar-thumb": {
				backgroundColor: theme.palette.primary.main,
				borderRadius: 10
			}
		}
	})
);

type Props = {
	orPokeList: { name: { ja: string; en: string }; no: number }[];
	andPokeList: { name: { ja: string; en: string }; no: number }[];
	switchState: boolean;
	pokeTypeData: getPokeTypeDataType;
	pokeData: normalizedPokeDataType;
	showPokeData: (event: ReactMouseEvent<HTMLInputElement, MouseEvent>) => void;
};

export const IconListArea: VFC<Props> = ({
	orPokeList,
	andPokeList,
	switchState,
	pokeData,
	showPokeData
}) => {
	const classes = useStyles();

	return (
		<Paper className={classes.listRoot}>
			{orPokeList.length !== 0 &&
				(switchState ? orPokeList : andPokeList).map((item) => {
					return (
						<PokeIconList
							key={item.no}
							item={item}
							pokeId={pokeData.id}
							onClick={showPokeData}
						/>
					);
				})}
		</Paper>
	);
};
