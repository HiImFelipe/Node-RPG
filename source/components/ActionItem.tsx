import { Box, Text, useFocus } from "ink";
import React, { FC } from "react";

interface IActionItem<T> {
	text: T;
	id: string;
}

const ActionItem: FC<IActionItem<string | number>> = ({ text, id }) => {
	const { isFocused } = useFocus({ id });

	return (
		<Box flexGrow={1} flexShrink={1} flexBasis={0} justifyContent="center">
			<Text>
				{text} {isFocused && <Text color="green">(focused)</Text>}
			</Text>
		</Box>
	);
};

export default ActionItem;
