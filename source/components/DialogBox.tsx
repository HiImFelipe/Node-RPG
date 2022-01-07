import { Newline, Text, useInput } from "ink";
import React, { FC, useEffect, useRef, useState } from "react";

import { CHARACTER_DRAW_SPEED } from "../constants/dialogBox";

interface IProps {
	text: string;
	onPlayerSkip?: Function;
}

/**
 *	A component that renders text over time. It's used to display dialogs (story or just NPC interactions).
 *	It also supports a skip function.
 *
 *	@param {string} text - The text to display.
 *	@param {Function} onPlayerSkip - A function to call when the player presses the enter key.
 *
 *	@example
 *		<DialogBox text="Hello, world!" />
 *
 *	@example
 *		<DialogBox text="Hello, world!" onPlayerSkip={() => console.log("Player skipped dialog.")} />
 */

const DialogBox: FC<IProps> = ({ text, onPlayerSkip }) => {
	const [textToDisplay, setTextToDisplay] = useState("");
	const interval = useRef<number>();

	useInput((_, key) => {
		if (key.return) {
			if (typeof onPlayerSkip === "function") onPlayerSkip();
		}
	});

	useEffect(() => {
		const renderTextOverTime = () => {
			interval.current = +setInterval(() => {
				setTextToDisplay((prevText) => {
					if (prevText.length >= text.length) {
						clearInterval(interval.current);

						return prevText;
					}

					return prevText + text[prevText.length];
				});
			}, CHARACTER_DRAW_SPEED);
		};

		renderTextOverTime();

		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<Text>
			{textToDisplay}
			<Newline />
		</Text>
	);
};

export default DialogBox;
