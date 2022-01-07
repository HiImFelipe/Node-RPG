import React, { FC } from "react";

import { Row, Column, ProfileItem, Options, Container } from "../../components";
import { usePlayer } from "../../contexts/playerContext";

const TrainingField: FC = () => {
	const { playerData, setPlayerData } = usePlayer();

	return (
		<Container>
			<Column borderStyle="single" width={"70%"} paddingY={2}>
				<Options
					items={[
						{ name: "Option 1", onSelect: () => {} },
						{ name: "Option 2", onSelect: () => {} },
						{ name: "Option 3", onSelect: () => {} },
						{
							name: "Back",
							onSelect: () => {
								setPlayerData({ ...playerData, currentMap: "menu" });
							},
						},
					]}
					optionsPerRow={2}
				/>
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
