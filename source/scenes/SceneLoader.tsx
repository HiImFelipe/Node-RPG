import React, { FC, useEffect, useState } from "react";

import { useUser } from "../contexts/userContext";
import Menu from "./menu";

const SceneLoader: FC = () => {
	const { userData } = useUser();
	const [ComponentToRender, SetComponentToRender] = useState<any>();

	useEffect(() => {
		const importDynamicComponent = async () => {
			if (userData && userData.currentMap) {
				const { default: Component } = await import(`./${userData.currentMap}`);
				return SetComponentToRender(() => Component);
			}

			return SetComponentToRender(() => Menu);
		};

		importDynamicComponent();
	}, []);

	return ComponentToRender ? <ComponentToRender /> : null;
};

export default SceneLoader;
