export interface pokeData {
  "no": number,
  "name": string,
  "form": string,
  "isMegaEvolution": boolean,
  "evolutions": number[],
  "types": string[],
  "abilities": string[],
  "hiddenAbilities": string[],
  "stats": {
    "hp": number,
    "attack": number,
    "defence": number,
    "spAttack": number,
    "spDefence": number,
    "speed": number
  }
}