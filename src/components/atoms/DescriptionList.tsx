import { Fragment, VFC } from "react";
import { descType } from "@utils/createDescArray";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(() =>
	createStyles({
		dataList: {
			display: "flex",
			width: 400,
			margin: "0 auto",
			flexWrap: "wrap",
			textAlign: "left",
			alignContent: "flex-start"
		},
		dataTerm: {
			width: 100
		},
		dataDescription: {
			width: "calc(100% - 100px)",
			margin: 0
		},
		typeImg: {
			backgroundSize: "50px 18px",
			backgroundPosition: "left center",
			backgroundRepeat: "no-repeat"
		}
	})
);

export type Props = {
	data: descType[];
	testId?: string;
};

export const DescriptionList: VFC<Props> = ({ data, testId }) => {
	const classes = useStyles();
	return (
		<dl className={classes.dataList} data-testId={testId}>
			{data.map((item: descType) => (
				<Fragment key={item.term}>
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
				</Fragment>
			))}
		</dl>
	);
};
