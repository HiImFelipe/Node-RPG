import React, { FC } from "react";
import { Box } from "ink";

import { Row, Column, ProfileItem, ActionItem } from "../../components";
import { usePlayer } from "../../contexts/playerContext";

/**
 * Ink default Box with a semantic name to indicate it's function.
 */

const Container: FC<typeof Box.defaultProps> = ({ children }) => {
	return <Box>{children}</Box>;
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
