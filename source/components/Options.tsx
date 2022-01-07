import React, { FC } from "react";
import { Row, ActionItem } from "./";

interface IOptionsProps {
	items: {
		name: string;
		onSelect: Function;
	}[];
	optionsPerRow?: number;
}

/**
 * Options for the player to choose from. It takes in an array with many options
 * and deals with the focus functionality for you. The options are displayed in
 * two columns by default.
 *
 * @param items - An array of objects with the following properties:
 *         name: string
 *         onSelect: Function
 * @param optionsPerRow - The number of options per row.
 * @returns A row of ActionItems
 * @example
 * const items = [
 *     { name: "Option 1", onSelect: () => {} },
 *     { name: "Option 2", onSelect: () => {} },
 * ];
 * <Options items={items} />
 */

const Options: FC<IOptionsProps> = ({ items, optionsPerRow = 2 }) => {
	let itemId = 0;

	const rows = items.reduce((result, item, index) => {
		const rowIndex = Math.floor(index / optionsPerRow);

		if (!result[rowIndex]) {
			result[rowIndex] = [];
		}

		(result[rowIndex] || []).push(item);
		return result;
	}, [] as { name: string; onSelect: Function }[][]);

	return (
		<>
			{rows.map((row, index) => {
				return (
					<Row flexGrow={1} key={index}>
						{row.map((item, index) => {
							itemId++;

							return (
								<ActionItem
									key={index}
									text={item.name}
									id={itemId + ""}
									optionsPerRow={optionsPerRow}
									totalNumberOfItems={items.length}
									onSelect={item.onSelect}
								/>
							);
						})}
					</Row>
				);
			})}
		</>
	);
};

export default Options;
