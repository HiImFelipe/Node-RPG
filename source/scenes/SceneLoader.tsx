import React, { FC, useEffect, useState } from "react";

import { useUser } from "../contexts/userContext";
import Menu from "./menu";

const SceneLoader: FC = () => {
	const { userData } = useUser();
	const [componentToRender, SetComponentToRender] = useState(() => Menu);

	useEffect(() => {
		const importDynamicComponent = async () => {
			if (userData && userData.currentMap) {
				const {default: Component} = await import(`./${userData.currentMap}`);
				return SetComponentToRender(() => Component);
			}

			return null;
		};

		importDynamicComponent();
	}, []);

	return React.createElement(componentToRender);
};

export default SceneLoader;
