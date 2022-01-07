import React, { FC } from "react";
import { Box, Text } from "ink";

interface IProfileItem<T> {
	displayText?: T;
	porpertyName: string;
	[key: string]: any;
}

/**
 * Ink's Box component with Ink's Text component inside that renders as "property: display".
 * It it used to create the profile data.
 *
 * @param {IProfileItem<T>} props - The properties to display.
 *
 * @example
 * 	<ProfileItem propertyName="name" displayText="John Doe" />
 *
 * @example
 * 	<ProfileItem propertyName="age" displayText={20} />
 */

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

export default ProfileItem;
