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
	onSelect,
}) => {
	const minId = 1;
	const { focus, isFocused } = useFocus({ id, autoFocus: id === minId + "" });

	const acceptedMoves = {
		upArrow() {
			if (+id - optionsPerRow >= minId) {
				const nextId = +id - optionsPerRow;
				focus(nextId + "");

				return;
			}

			focus(minId + "");
		},
		downArrow() {
			if (+id + optionsPerRow <= totalNumberOfItems) {
				const nextId = +id + optionsPerRow;
				focus(nextId + "");

				return;
			}
			focus(totalNumberOfItems + "");
		},
		leftArrow() {
			if (+id - 1 >= minId) {
				const nextId = +id - 1;
				focus(nextId + "");

				return;
			}
			focus(minId + "");
		},
		rightArrow() {
			if (+id + 1 <= totalNumberOfItems) {
				const nextId = +id + 1;
				focus(nextId + "");

				return;
			}
			focus(totalNumberOfItems + "");
		},
		return() {
			onSelect();
		},
	};

	useInput((_, possibleKeys) => {
		if (isFocused) {
			const keyHit = Object.keys(possibleKeys)
				.filter(
					(key) =>
						possibleKeys[key as keyof typeof possibleKeys] === true &&
						key !== "meta"
				)
				.find(() => true);

			if (keyHit && acceptedMoves[keyHit as keyof typeof acceptedMoves])
				acceptedMoves[keyHit as keyof typeof acceptedMoves]();
		}
	});

	return (
		<Box width={100 / optionsPerRow + "%"} justifyContent="center">
			<Text color={isFocused ? colors.primary : "white"}>{text}</Text>
		</Box>
	);
};

export default ActionItem;
