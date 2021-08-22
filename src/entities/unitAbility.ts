export default class PlayerAbility {
    type!: 'attack' | 'buff'
    damage!: number | null
    description!: string
    icon!: string
    constructor(
        type: 'attack' | 'buff',
        damage: number | null,
        description: string,
        icon: string
    ) { }
}