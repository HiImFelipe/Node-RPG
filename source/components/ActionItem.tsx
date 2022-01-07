import { Box, Text, useFocus, useInput } from "ink";
import React, { FC } from "react";
import colors from "../constants/colors";

interface IActionItem<T> {
	text: T;
	id: string;
	onSelect: Function;
	optionsPerRow: number;
	totalNumberOfItems: number;
}

const ActionItem: FC<IActionItem<string | number>> = ({
	text,
	id,
	totalNumberOfItems,
	optionsPerRow,
}) => {
	const minId = 1;
	const { focus, isFocused } = useFocus({ id, autoFocus: id === minId + "" });

	useInput((_, key) => {
		if (isFocused) {
			if (key.downArrow) {
				if (+id + optionsPerRow < totalNumberOfItems) {
					const nextId = +id + optionsPerRow;
					focus(nextId + "");

					return;
				}

				focus(totalNumberOfItems + "");
			}

			if (key.upArrow) {
				if (+id - optionsPerRow > minId) {
					const nextId = +id - optionsPerRow;
					focus(nextId + "");

					return;
				}

				focus(minId + "");
			}

			if (key.rightArrow) {
				if (+id + 1 < totalNumberOfItems) {
					const nextId = +id + 1;
					focus(nextId + "");

					return;
				}

				focus(totalNumberOfItems + "");
			}

			if (key.leftArrow) {
				if (+id - 1 > minId) {
					const nextId = +id - 1;
					focus(nextId + "");

					return;
				}

				focus(minId + "");
			}
		}
	});

	return (
		<Box width={100 / optionsPerRow + "%"} justifyContent="center">
			<Text color={isFocused ? colors.primary : "white"}>{text}</Text>
		</Box>
	);
};

export default ActionItem;
