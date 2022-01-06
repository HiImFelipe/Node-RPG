import React, { useState } from "react";
import { Box, Text } from "ink";

import { DynamicComponentRender as EventRender } from "../../components";

export interface IEventsHandler {
	currentEvent: string;
}

const PATH_RELATIVE_TO_SOURCE = "scenes/character creation";

const CharacterCreation = () => {
	const [eventsData, setEventsData] = useState<IEventsHandler>({
		currentEvent: "role selection",
	});

	return (
		<Box flexDirection="column">
			<Text>Your journey has just started!</Text>

			<Box justifyContent="center">
				<EventRender
					path={`${PATH_RELATIVE_TO_SOURCE}/events/${eventsData.currentEvent}`}
					dependsOn={[eventsData.currentEvent]}
					setEventsData={setEventsData}
				/>
			</Box>
		</Box>
	);
};

export default CharacterCreation;
