import React, { FC } from "react";

import PlayerProvider from "./contexts/playerContext";
import SceneLoader from "./scenes/SceneLoader";

const App: FC = () => {
	return (
		<PlayerProvider>
			<SceneLoader />
		</PlayerProvider>
	);
};

export default App;
