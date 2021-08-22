import UnitAbility from './unitAbility'
import GameBaseUnit from './gameBaseUnit'
import IGameBaseUnitConfig from '~/interfaces/IGameBaseUnitConfig'
import IUnitStats from '~/interfaces/IUnitStats'

export class Player extends GameBaseUnit {
    private primaryStat!: number
    private attackPower!: number
    private haste!: number
    private crit!: number
    private mastery!: number
    private versatility!: number
    constructor({ scene, x, y, texture }: IGameBaseUnitConfig, stats?: IUnitStats) {
        super(scene, x, y, texture)
        stats ? this.setDefinedStats(stats) : this.setDefaultStats()
    }
    private calculateDamageAttack(ability: UnitAbility): number {
        if (!ability.damage) {
            throw new Error('Cannot calculate damage attack, ability doesnt have damage!')
        }
        const abilityDamagePorcentage = ability.damage / 100
        const totalDamage = abilityDamagePorcentage * this.primaryStat
        return totalDamage
    }

    private setDefinedStats(stats: IUnitStats) {
        this.primaryStat = stats.primaryStat
        this.attackPower = stats.attackPower
        this.haste = stats.haste
        this.crit = stats.crit
        this.mastery = stats.mastery
        this.versatility = stats.versatility
    }
    private setDefaultStats() {
        this.primaryStat = 1000
        this.attackPower = 1000
        this.haste = 15
        this.crit = 30
        this.mastery = 25
        this.versatility = 10
    }
}