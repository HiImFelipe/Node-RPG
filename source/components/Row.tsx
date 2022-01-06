import { Box } from "ink";
import React, { FC } from "react";

interface IProps {
	[key: string]: any;
}

const Row: FC<IProps> = ({ children, ...props }) => {
	return (
		<Box flexDirection="row" {...props}>
			{children}
		</Box>
	);
};

export default Row;
