import Phaser from 'phaser'

const formatScore = (score: number) => `Score: ${score}`

export default class ScoreLabel extends Phaser.GameObjects.Text {

    constructor(
        public scene: Phaser.Scene,
        public x: number,
        public y: number,
        public score: number,
        public style: Phaser.GameObjects.TextStyle
    ) {
        super(scene, x, y, formatScore(score), style)
        this.style = style
    }
    setScore(score: number) {
        this.score = score
        this.updateScoreText()
    }

    add(points: number) {
        const newScore = this.score + points
        this.setScore(newScore)
    }

    updateScoreText() {
        const formatedScore = formatScore(this.score)
        this.setText(formatedScore)
    }
}