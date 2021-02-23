import { VFC } from "react";
import { Button, ButtonProps } from "@material-ui/core";

export type Props = {
	text: string;
	color?: ButtonProps["color"];
	variant?: ButtonProps["variant"];
	onClick: () => void;
};

export const FixButton: VFC<Props> = ({ color, text, variant, onClick }) => {
	return (
		<Button color={color} variant={variant} onClick={onClick}>
			{text}
		</Button>
	);
};
