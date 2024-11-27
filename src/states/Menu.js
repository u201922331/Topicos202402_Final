import Phaser from "phaser";

class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");

        this.bg = null;

        this.textTitle = null;
        this.fontStyle = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, "menuBackground").setOrigin(0, 0);
        this.fontStyle = {
            font: '20px Arial',
            fill: '#FFCC00',
            stroke: '#333',
            strokeThickness: 5
        };
        this.textTitle = this.add.text(this.bg.width / 2, this.bg.height / 2, "Welcome Gaa!", this.fontStyle);
        this.textTitle.x -= this.textTitle.width / 2;
        this.textTitle.y -= this.textTitle.height / 2;
    }

    update() {
        this.input.on("pointerdown", () => this.startGame());
    }

    startGame() {
        this.scene.start("Game");
    }
}

export default Menu;