import { Player } from "../player";
import IUnitStats from '../../interfaces/IUnitStats'
import IGameBaseUnitConfig from '../../interfaces/IGameBaseUnitConfig'
import WARRIOR from '../../config/warrior'

export default class Warrior extends Player {
    constructor(classUnitConfig: IClassUnitConfig, stats: IUnitStats) {
        super({ ...classUnitConfig, texture: WARRIOR.SPRITE_KEY }, stats)
        classUnitConfig.scene.add.existing(this);
        classUnitConfig.scene.physics.add.existing(this)
    }

    static preloadSprite(scene: Phaser.Scene) {
        scene.load.spritesheet(WARRIOR.SPRITE_KEY, WARRIOR.SPRITE_FOLDER_LOCATION, { frameWidth: 69, frameHeight: 44, })
    }
    static setAnimations(scene: Phaser.Scene) {
        scene.anims.create({
            key: WARRIOR.ANIMATION.IDLE,
            frames: scene.anims.generateFrameNumbers(WARRIOR.SPRITE_KEY, { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1,
        })

        scene.anims.create({
            key: WARRIOR.ANIMATION.RUN,
            frames: scene.anims.generateFrameNumbers(WARRIOR.SPRITE_KEY, { start: 6, end: 13 }),
            frameRate: 10,
            repeat: -1
        })
        scene.anims.create({
            key: WARRIOR.ANIMATION.SWORD,
            frames: scene.anims.generateFrameNumbers(WARRIOR.SPRITE_KEY, { start: 14, end: 25 },),
            frameRate: 10,
            repeat: -1
        })
        scene.anims.create({
            key: WARRIOR.ANIMATION.JUMP_UP,
            frames: scene.anims.generateFrameNumbers(WARRIOR.SPRITE_KEY, { start: 40, end: 42 }),
            frameRate: 4,
            repeat: -1
        })
        scene.anims.create({
            key: WARRIOR.ANIMATION.JUMP_DOWN,
            frames: scene.anims.generateFrameNumbers(WARRIOR.SPRITE_KEY, { start: 45, end: 47 }),
            frameRate: 3,
            repeat: -1
        })
        scene.anims.create({
            key: WARRIOR.ANIMATION.IN_AIR,
            frames: scene.anims.generateFrameNumbers(WARRIOR.SPRITE_KEY, { start: 43, end: 44 }),
            frameRate: 2,
            repeat: -1
        })
    }

}

export type IClassUnitConfig = Omit<IGameBaseUnitConfig, 'texture'>