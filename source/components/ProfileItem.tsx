import React, { FC } from 'react'
import { Box, Text } from 'ink';

interface IProfileItem<T> {
	displayText?: T;
	porpertyName: string;
	[key: string]: any;
}

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

export default ProfileItem