export abstract class Player implements IPlayer {
	public name = "";
	public specialAbilities: ISpecialAbility[] = [];

	constructor(public speed = 0, public attack = 0, public defense = 0) {}

	setName(name: string) {
		this.name = name;
	}

	abstract addSpecialAbility(id: number): void;
	abstract replaceSpecialAbility(currentSlot: number, id: number): void;
}
