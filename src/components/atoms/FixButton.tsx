import { Button, ButtonProps } from "@material-ui/core";

type OwnProps = {
	color?: ButtonProps["color"];
	text: string;
	variant?: ButtonProps["variant"];
	onClick: () => void;
};

type Props = OwnProps;

export const FixButton = ({
	color,
	text,
	variant,
	onClick
}: Props): JSX.Element => {
	return (
		<Button color={color} variant={variant} onClick={onClick}>
			{text}
		</Button>
	);
};
