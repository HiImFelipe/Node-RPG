import React, { FC } from "react";
import { Box, Text, useApp } from "ink";
import SelectInput from "ink-select-input";

import colors from "../../constants/colors";
import { usePlayer } from "../../contexts/playerContext";

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
	const { setPlayerData } = usePlayer();

	const handleSelect = (item: IOption) => {
		switch (item.value) {
			case "newgame":
				return setPlayerData((prevPlayerData) => ({
					...prevPlayerData,
					currentMap: "training field",
				}));
			case "quit":
				return exit();
			default:
				return;
		}
	};

	return (
		<Box
			flexDirection="column"
			borderStyle="double"
			padding={1}
			alignItems="center"
		>
			<Box marginBottom={2} marginLeft={2}>
				<Text bold>
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
