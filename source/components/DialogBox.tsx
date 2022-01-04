import { Newline, Text, useInput } from "ink";
import React, { FC, useEffect, useState } from "react";

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

	useInput((_, key) => {
		if (key.return) {
			if (typeof onPlayerSkip === "function") onPlayerSkip();
		}
	});

	useEffect(() => {
		const renderTextOverTime = () => {
			const intervalId = setInterval(() => {
				setTextToDisplay((prevText) => {
					if (prevText.length >= text.length) {
						clearInterval(intervalId);

						return prevText;
					}

					return prevText + text[prevText.length];
				});
			}, CHARACTER_DRAW_SPEED);
		};

		renderTextOverTime();
	}, []);

	return (
		<Text>
			{textToDisplay}
			<Newline />
		</Text>
	);
};

export { DialogBox };
