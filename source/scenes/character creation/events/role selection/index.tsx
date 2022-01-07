import React, { FC } from "react";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";

import colors from "../../../../constants/colors";
import { usePlayer } from "../../../../contexts/playerContext";
import { IEventsHandler } from "../..";
import { Archer, Knight } from "../../../../models";

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

const RoleSelection: FC<IProps> = ({ setEventsData }) => {
	const { setPlayerData } = usePlayer();

	const postSelect = () => {
		setEventsData((prevEventsData) => ({
			...prevEventsData,
			currentEvent: "name selection",
		}));
	};

	const handleSelect = (item: IOption) => {
		switch (item.value) {
			case "archer":
				const archer = new Archer();
				setPlayerData((prevPlayerData) => ({ ...prevPlayerData, ...archer }));

				return postSelect();
			case "knight":
				const knight = new Knight();
				setPlayerData((prevPlayerData) => ({ ...prevPlayerData, ...knight }));

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
