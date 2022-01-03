import React, { useState } from "react";
import { Box, Text } from "ink";
import TextInput from "ink-text-input";
import SelectInput from "ink-select-input/build";

import colors from "../../constants/colors";
import { usePlayer } from "../../contexts/playerContext";

const steps = ["Name creation", "Class selection"];
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

const CharacterCreation = () => {
	const [name, setName] = useState("");
	const [currentStep, setCurrentStep] = useState(0);
	const { setPlayerData } = usePlayer();

	const advanceStep = () => {
		if (currentStep < steps.length - 1)
			setCurrentStep((prevStep) => prevStep + 1);
	};

	const handleSelect = (item: IOption) => {
		switch (item.value) {
			case "archer":
				return setPlayerData((prevPlayerData) => ({
					...prevPlayerData,
					job: "Archer",
					currentMap: "training field",
				}));
			case "knight":
				return setPlayerData((prevPlayerData) => ({
					...prevPlayerData,
					job: "Knight",
					currentMap: "training field",
				}));
			default:
				return;
		}
	};

	const stepRender = () => {
		switch (currentStep) {
			case 0:
				return (
					<Box flexDirection="column" alignItems="center">
						<Box marginBottom={2}>
							<Text>Pick a name for your character</Text>
						</Box>

						<TextInput value={name} onChange={setName} onSubmit={advanceStep} />
					</Box>
				);
			case 1:
				return (
					<Box flexDirection="column">
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
			default:
				return null;
		}
	};

	return (
		<Box flexDirection="column">
			<Text>Your journey has just started!</Text>
			<Box justifyContent="center">{stepRender()}</Box>
		</Box>
	);
};

export default CharacterCreation;
