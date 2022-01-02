import React, { FC } from "react";
import { Box, Text, useApp } from "ink";
import SelectInput from "ink-select-input";

import TrainingField from "../training field";
import colors from "../../constants/colors";

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

const Menu: FC = () => {
	const { exit } = useApp();

	const handleSelect = (item: IOption) => {
		switch (item.value) {
			case "newgame":
				return <TrainingField />;
			case "quit":
				return exit();
			default:
				return;
		}
	};

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

export default Menu;
