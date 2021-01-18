import React from "react";

type dataObject = {
	term: string;
	description: string | number;
};

type OwnProps = {
	data: dataObject[];
};

type Props = OwnProps;

export const DescriptionList = ({ data }: Props): JSX.Element => {
	return (
		<dl>
			{data.map((item: dataObject) => (
				<>
					<dt>{item.term}</dt>
					<dd>{item.description}</dd>
				</>
			))}
		</dl>
	);
};
