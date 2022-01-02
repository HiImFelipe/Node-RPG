interface ISpecialAbility {
	id: number;
	name: string;
	attack: number;
	manaCost: number;
}

interface IPlayer {
	name: string;
	job?: string;
	attack: number;
	defense: number;
	speed: number;
	currentMap?: string;
	specialAbilities: ISpecialAbility[];
}
