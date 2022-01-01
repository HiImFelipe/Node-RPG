import React, { useState, createContext, useContext } from "react";

interface IContextContent {
	userData: IUser;
	setUserData: Function;
}

export const UserContext = createContext({} as IContextContent);

const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		name: "",
		job: "",
		attack: 5,
		defense: 5,
		speed: 5,
	});

	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => {
	const context = useContext(UserContext);
	const { userData, setUserData } = context;
	return { userData, setUserData };
};

export default UserProvider;
export { useUser };
