import Phaser from 'phaser'
import { ASSETS, ANIMATIONS } from './consts'
import Warrior from '../entities/classes/warrior'

export default class GameScene extends Phaser.Scene {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined
    warrior: Warrior | undefined
    constructor() {
        super('hello-world')
        this.cursors = undefined
        this.warrior = undefined
    }

    preload() {
        this.load.image(ASSETS.SKY, 'assets/images/sky.png');
        this.load.image(ASSETS.GROUND, 'assets/images/platform.png');
        Warrior.preloadSprite(this)
    }

    create() {
        this.add.image(400, 300, 'sky')
        this.warrior = this.createWarrior()
        Warrior.setAnimations(this)
        const platforms = this.createPlatforms()
        this.warrior.setScale(2, 2)
        this.physics.add.collider(this.warrior, platforms)
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        if (this.cursors?.right.isDown) {
            this.warrior?.play(ANIMATIONS.WARRIOR.RUN, true)
            this.warrior?.setVelocityX(160)
            this.warrior?.setFlipX(false)
        }
        else if (this.cursors?.left.isDown) {
            this.warrior?.play(ANIMATIONS.WARRIOR.RUN, true)
            this.warrior?.setVelocityX(-160)
            this.warrior?.setFlipX(true)

        } else if (this.cursors?.space.isDown) {
            this.warrior?.play(ANIMATIONS.WARRIOR.SWORD, true)

        }
        else {
            this.warrior?.setVelocityX(0)
            this.warrior?.anims.play(ANIMATIONS.WARRIOR.IDLE, true)
        }
        if (this.cursors?.up.isDown && this.warrior?.body.touching.down) {
            this.warrior?.play(ANIMATIONS.WARRIOR.JUMP_UP, true)
            this.warrior.setVelocityY(-330)
        }
        if (!this.warrior?.body.touching.down) {
            this.warrior?.play(ANIMATIONS.WARRIOR.JUMP_DOWN, true)
        }
    }

    createWarrior() {
        const warrior = new Warrior(
            { scene: this, x: 50, y: 40 },
            {
                attackPower: 5000,
                crit: 20,
                haste: 20,
                mastery: 10,
                primaryStat: 300,
                versatility: 100
            }
        )
        warrior.setCollideWorldBounds(true)
        return warrior
    }

    private createPlatforms() {
        const platforms = this.physics.add.staticGroup()
        platforms.create(400, 568, 'ground').setScale(2).refreshBody()

        platforms.create(600, 400, 'ground')
        platforms.create(50, 250, 'ground')
        platforms.create(750, 220, 'ground')

        return platforms
    }
}
