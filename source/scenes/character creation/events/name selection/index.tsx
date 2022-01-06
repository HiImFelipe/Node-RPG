import React, { FC, useState } from "react";
import { Box, Text } from "ink";
import TextInput from "ink-text-input";

import { usePlayer } from "../../../../contexts/playerContext";
import { IEventsHandler } from "../..";

interface IProps {
	setEventsData: React.Dispatch<React.SetStateAction<IEventsHandler>>;
}

const NameSelection: FC<IProps> = ({}) => {
	const [name, setName] = useState("");
	const { setPlayerData } = usePlayer();

	return (
		<Box flexDirection="column" paddingX={5} paddingY={2} borderStyle="round">
			<Box marginBottom={2}>
				<Text>Pick a name for your character</Text>
			</Box>

			<TextInput
				value={name}
				onChange={setName}
				onSubmit={() => {
					if (name.length < 3) return;

					setPlayerData((prevPlayerData) => ({
						...prevPlayerData,
						name,
						currentMap: "training field",
					}));
				}}
			/>
		</Box>
	);
};

export default NameSelection;
