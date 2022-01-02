import { Player } from "./Player";
import { archerAbilities } from "../constants/specialAbilities";

const DEFAULT_ARCHER_VALUES = {
	speed: 3,
	attack: 5,
	defense: 2,
};

export class Archer extends Player {
	constructor() {
		super(
			DEFAULT_ARCHER_VALUES.speed,
			DEFAULT_ARCHER_VALUES.attack,
			DEFAULT_ARCHER_VALUES.defense
		);
	}

	addSpecialAbility(id: number) {
		const specialAbility = archerAbilities.find((item) => item.id === id);

		if (specialAbility) this.specialAbilities.push(specialAbility);
	}
}
