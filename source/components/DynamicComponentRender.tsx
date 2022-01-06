import React, { FC, useEffect, useState } from "react";

interface IProps {
	path: string;
	dependsOn?: any[];
	[x: string]: any;
}

const DynamicComponentRender: FC<IProps> = ({
	path,
	dependsOn = [],
	...props
}) => {
	const [ComponentToRender, SetComponentToRender] = useState<any>();

	useEffect(() => {
		const importDynamicComponent = async () => {
			try {
				const { default: Component } = await import(`../${path}`);

				return SetComponentToRender(() => Component);
			} catch (e) {
				console.log(e);
			}
		};

		importDynamicComponent();
	}, [...dependsOn]);

	return ComponentToRender ? <ComponentToRender {...props} /> : null;
};

export default DynamicComponentRender;
