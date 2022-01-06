import React, { FC } from "react";

import { usePlayer } from "../contexts/playerContext";
import { DynamicComponentRender as SceneRender } from "../components";

const SceneLoader: FC = () => {
	const { playerData } = usePlayer();

	return (
		<SceneRender
			path={
				playerData.currentMap
					? `scenes/${playerData.currentMap}`
					: "scenes/menu"
			}
			dependsOn={[playerData]}
		/>
	);
};

export default SceneLoader;
