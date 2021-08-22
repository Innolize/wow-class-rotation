import UnitAbility from './unitAbility'

export default class GameBaseUnit extends Phaser.Physics.Arcade.Sprite {
    private damageBuff!: number[]
    private armorDebuff!: number[]
    healPoints!: number
    alive!: boolean
    abilities!: UnitAbility[]
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture)

        this.healPoints = 20000
        this.alive = true
        this.abilities = []
    }

    public attackTarget(damage: number, target: GameBaseUnit) {
        target.recieveDamage(damage)
    }

    public recieveDamage(damage: number) {
        if (damage > this.healPoints) {
            return this.alive = false
        }
        this.healPoints = this.healPoints - damage
        return this.healPoints
    }
}