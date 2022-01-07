import { Box } from "ink";
import React, { FC } from "react";

/**
 * Ink's Box with flexDirection set to column.
 */

const Column: FC<typeof Box.defaultProps> = ({ children, ...props }) => {
	return (
		<Box flexDirection="column" {...props}>
			{children}
		</Box>
	);
};

export default Column;
