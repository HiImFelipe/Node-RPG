import { ARCHER_ABILITIES } from "../constants/specialAbilities";
import { DEFAULT_ARCHER_VALUES } from "../constants/defaultStats";
import { Player } from "./Player";

export class Archer extends Player {
	constructor() {
		super(
			DEFAULT_ARCHER_VALUES.speed,
			DEFAULT_ARCHER_VALUES.attack,
			DEFAULT_ARCHER_VALUES.defense
		);
	}

	private lookForSpecialAbility(id: number) {
		return ARCHER_ABILITIES.find((item) => item.id === id);
	}

	public addSpecialAbility(id: number) {
		const specialAbility = this.lookForSpecialAbility(id);

		if (specialAbility) this.specialAbilities.push(specialAbility);
	}

	public replaceSpecialAbility(currentSlot: number, id: number) {
		const specialAbility = this.lookForSpecialAbility(id);

		if (specialAbility) this.specialAbilities[currentSlot - 1] = specialAbility;
	}
}
