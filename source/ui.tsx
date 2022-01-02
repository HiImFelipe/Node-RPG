import React, { FC } from "react";

import UserProvider from "./contexts/userContext";
import SceneLoader from "./scenes/SceneLoader";

const App: FC = () => {
	return (
		<UserProvider>
			<SceneLoader />
		</UserProvider>
	);
};

export default App;
