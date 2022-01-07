import React, { FC } from "react";
import { Box } from "ink";

/**
 * Ink's Box with a semantic name to better indicate it's function.
 */

const Container: FC<typeof Box.defaultProps> = ({ children }) => {
	return <Box>{children}</Box>;
};

export default Container;
