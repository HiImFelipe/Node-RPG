import React, { FC } from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";

import colors from "./constants/colors";

interface IOption {
	label: string;
	value: string;
}

const options: IOption[] = [
	{
		label: "New Game",
		value: "newgame",
	},
	{
		label: "Quit",
		value: "quit",
	},
];

const handleSelect = (item: IOption) => {
	switch (item.value) {
		case "quit":
			process.exit(0);
		default:
			return;
	}
};

const App: FC = () => {
	return (
		<Box flexDirection="column" borderStyle="double" padding={1}>
			<Box marginBottom={2} marginLeft={2}>
				<Text>
					Welcome to <Text color={colors.primary}>Node RPG</Text>!
				</Text>
			</Box>

			<SelectInput
				items={options}
				color={colors.contrast}
				onSelect={handleSelect}
			/>
		</Box>
	);
};

export default App;
