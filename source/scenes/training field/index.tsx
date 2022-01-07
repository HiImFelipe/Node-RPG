import React, { FC } from "react";
import { Box, Text, useFocus } from "ink";

import { Row, Column } from "../../components";
import { usePlayer } from "../../contexts/playerContext";

/**
 * Ink default Box with a semantic name to indicate it's function.
 */

const Container: FC<typeof Box.defaultProps> = ({ children }) => {
	return <Box>{children}</Box>;
};

interface IProfileItem<T> {
	displayText?: T;
	porpertyName: string;
	[key: string]: any;
}

interface IActionItem<T> {
	text: T;
	id: string;
}

const ProfileItem: FC<IProfileItem<number | string>> = ({
	displayText,
	porpertyName,
	children,
	...props
}) => {
	return (
		<Box {...props}>
			<Text>{`${porpertyName}: ${displayText}`}</Text>
		</Box>
	);
};

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

const TrainingField: FC = () => {
	const { playerData } = usePlayer();

	return (
		<Container>
			<Column borderStyle="single" width={"70%"} paddingY={2}>
				<Row flexGrow={1}>
					<ActionItem text="Option 1" id="1" />
					<ActionItem text="Option 2" id="2" />
				</Row>

				<Row flexGrow={1}>
					<ActionItem text="Option 3" id="3" />
					<ActionItem text="Option 4" id="4" />
				</Row>
			</Column>

			<Column borderStyle="single" flexGrow={1} paddingY={2}>
				<Row marginBottom={1}>
					<ProfileItem
						marginLeft={2}
						porpertyName="Name"
						flexGrow={1}
						displayText={playerData.name}
					/>
					<ProfileItem
						porpertyName="Row"
						flexGrow={1}
						displayText={playerData.job}
					/>
				</Row>

				<Row>
					<ProfileItem
						marginX={2}
						porpertyName="Attack"
						displayText={playerData.attack}
					/>
					<ProfileItem
						marginX={2}
						porpertyName="Defense"
						displayText={playerData.defense}
					/>
					<ProfileItem
						marginX={2}
						porpertyName="Speed"
						displayText={playerData.speed}
					/>
				</Row>
			</Column>
		</Container>
	);
};

export default TrainingField;
