import React, { useState, createContext, useContext, FC } from "react";

interface IContextContent {
	playerData: IPlayer;
	setPlayerData: Function;
}

export const UserContext = createContext({} as IContextContent);

const PlayerProvider: FC = ({ children }) => {
	const [playerData, setPlayerData] = useState({} as IPlayer);

	return (
		<UserContext.Provider value={{ playerData, setPlayerData }}>
			{children}
		</UserContext.Provider>
	);
};

const usePlayer = () => {
	const context = useContext(UserContext);
	const { playerData, setPlayerData } = context;
	return { playerData, setPlayerData };
};

export default PlayerProvider;
export { usePlayer };
