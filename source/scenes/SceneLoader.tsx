import React, { FC, useEffect, useState } from "react";

import { usePlayer } from "../contexts/playerContext";
import Menu from "./menu";

const SceneLoader: FC = () => {
	const { playerData } = usePlayer();
	const [ComponentToRender, SetComponentToRender] = useState<any>();

	useEffect(() => {
		const importDynamicComponent = async () => {
			if (playerData && playerData.currentMap) {
				const { default: Component } = await import(
					`./${playerData.currentMap}`
				);
				return SetComponentToRender(() => Component);
			}

			return SetComponentToRender(() => Menu);
		};

		importDynamicComponent();
	}, [playerData]);

	return ComponentToRender ? <ComponentToRender /> : null;
};

export default SceneLoader;
