import { Newline, Text, useInput } from "ink";
import React, { FC, useEffect, useRef, useState } from "react";

import { CHARACTER_DRAW_SPEED } from "../constants/dialogBox";

interface IProps {
	text: string;
	onPlayerSkip?: Function;
}

/*
    Use-case: 
        If you render plain text on Ink, it will think that your program has ended.

        The library provides a React Hook that listens to keyboard events, which
        will be called here.
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
