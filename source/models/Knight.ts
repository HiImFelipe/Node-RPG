import { KNIGHT_ABILITIES } from "../constants/specialAbilities";
import { DEFAULT_KNIGHT_VALUES } from "../constants/defaultStats";
import { Player } from "./Player";

export class Knight extends Player {
	public job = "Knight";

	constructor() {
		super(
			DEFAULT_KNIGHT_VALUES.speed,
			DEFAULT_KNIGHT_VALUES.attack,
			DEFAULT_KNIGHT_VALUES.defense
		);
	}

	private lookForSpecialAbility(id: number) {
		return KNIGHT_ABILITIES.find((item) => item.id === id);
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
