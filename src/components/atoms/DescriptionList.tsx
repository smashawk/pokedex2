import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
	createStyles({
		dataList: {
			width: 400,
			display: "flex",
			flexWrap: "wrap",
			textAlign: "left",
			alignContent: "flex-start"
		},
		dataTerm: {
			width: 100
		},
		dataDescription: {
			width: 250,
			margin: 0
		}
	})
);

type dataObject = {
	term: string;
	description: string | number;
};

type OwnProps = {
	data: dataObject[];
};

type Props = OwnProps;

export const DescriptionList = ({ data }: Props): JSX.Element => {
	const classes = useStyles();
	return (
		<dl className={classes.dataList}>
			{data.map((item: dataObject) => (
				<React.Fragment key={item.term}>
					<dt className={classes.dataTerm}>{item.term}</dt>
					<dd className={classes.dataDescription}>{item.description}</dd>
				</React.Fragment>
			))}
		</dl>
	);
};
