import React, { FC } from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";

import colors from "../../../../constants/colors";
import { usePlayer } from "../../../../contexts/playerContext";
import { IEventsHandler } from "../..";

interface IProps {
	setEventsData: React.Dispatch<React.SetStateAction<IEventsHandler>>;
}

const roleOptions: IOption[] = [
	{
		label: "Archer",
		value: "archer",
	},
	{
		label: "Knight",
		value: "knight",
	},
];

const RoleSelection: FC<IProps> = ({}) => {
	const { setPlayerData } = usePlayer();

	const postSelect = () => {
		// setEventsData(prevEventsData => ({...prevEventsData, currentEvent: ''}))
	};

	const handleSelect = (item: IOption) => {
		switch (item.value) {
			case "archer":
				setPlayerData((prevPlayerData) => ({
					...prevPlayerData,
					job: "Archer",
				}));

				return postSelect();
			case "knight":
				setPlayerData((prevPlayerData) => ({
					...prevPlayerData,
					job: "Knight",
				}));

				return postSelect();
			default:
				return;
		}
	};

	return (
		<Box
			flexDirection="column"
			alignItems="center"
			paddingX={5}
			paddingY={2}
			borderStyle="round"
		>
			<Box marginBottom={2}>
				<Text>Pick a role for your character</Text>
			</Box>

			<SelectInput
				items={roleOptions}
				color={colors.contrast}
				onSelect={handleSelect}
			/>
		</Box>
	);
};

export default RoleSelection;
