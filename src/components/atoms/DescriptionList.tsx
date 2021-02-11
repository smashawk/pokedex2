import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

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
		},
		typeImg: {
			backgroundSize: "50px 18px",
			backgroundPosition: "left center",
			backgroundRepeat: "no-repeat"
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
					<dd
						className={classNames(
							classes.dataDescription,
							(item.term === "Type1" || item.term === "Type2") &&
								classes.typeImg
						)}
						style={{
							backgroundImage:
								item.term === "Type1" || item.term === "Type2"
									? `url(${process.env.PUBLIC_URL}/images/types/${item.description}.png)`
									: "none"
						}}
					>
						{item.term === "Type1" || item.term === "Type2" || item.description}
					</dd>
				</React.Fragment>
			))}
		</dl>
	);
};
