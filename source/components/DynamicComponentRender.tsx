import React, { FC, useEffect, useState } from "react";

interface IProps {
	path: string;
	dependsOn?: any[];
	[x: string]: any;
}

/**
 * A component that renders another component dynamically.
 *
 * @param {string} path - The path to the component to render.
 * @param {any[]} dependsOn - An array of values that will be passed to the useEffect as a dependency.
 * @param {any} props - Any other props to pass to the component.
 *
 * @example
 * 	<DynamicComponent path="components/DialogBox" />
 *
 * @example
 * 	<DynamicComponent path="components/DialogBox" dependsOn={[text]} />
 *
 * @example
 * 	<DynamicComponent path="components/DialogBox" props={{ text }} />
 *
 * @example
 * 	<DynamicComponent path="components/DialogBox" dependsOn={[text]} props={{ text }} />
 */

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
