import Phaser from "phaser";

class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");

        this.bg = null;

        this.finalScore = null;

        this.fontStyle = null;
        this.textGameOver = null;
    }

    // init(data) {
    //     this.finalScore = data
    // }

    create() {
        this.bg = this.load.image(0, 0, "gameoverBackground").setOrigin(0, 0);

        this.fontStyle = {
            font: '20px Arial',
            fill: '#FFCC00',
            stroke: '#333',
            strokeThickness: 5
        };

        this.textGameOver = this.add.text(0, 0, "¡JUEGO TERMINADO!\n")
    }

    update() {
        this.input.on("pointerdown", () => this.toMenu());
    }

    toMenu() {
        this.scene.start("Menu");
    }
}

export default GameOver;