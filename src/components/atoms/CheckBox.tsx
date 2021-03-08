import { VFC } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

export type Props = {
	isSelected: boolean;
	label: string;
};

export const CheckBox: VFC<Props> = ({ isSelected, label }) => {
	const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
	const checkedIcon = <CheckBoxIcon fontSize="small" />;

	return (
		<FormControlLabel
			control={
				<Checkbox
					icon={icon}
					checkedIcon={checkedIcon}
					style={{ marginRight: 8 }}
					checked={isSelected}
				/>
			}
			label={label}
		/>
	);
};
