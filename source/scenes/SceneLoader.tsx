import React, { FC } from "react";

import { usePlayer } from "../contexts/playerContext";
import SceneRender from "../components/DynamicComponentRender";

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
