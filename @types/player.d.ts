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
	currentMap?: "menu" | "character creation" | "training field";
	specialAbilities: ISpecialAbility[];
	addSpecialAbility(id: number): void;
	replaceSpecialAbility(currentSlot: number, id: number): void;
}
