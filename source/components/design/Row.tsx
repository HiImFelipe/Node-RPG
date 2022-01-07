import { Box } from "ink";
import React, { FC } from "react";

/**
 * Ink's Box with flexDirection set to row.
 */

const Row: FC<typeof Box.defaultProps> = ({ children, ...props }) => {
	return (
		<Box flexDirection="row" {...props}>
			{children}
		</Box>
	);
};

export default Row;
