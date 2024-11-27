import Phaser from "phaser";

class Preloader extends Phaser.Scene {
    constructor() {
        super("Preloader");
    }

    preload() {
        this.load.image("menuBackground", "assets/menubg.png");
        this.load.image("gameBackground", "assets/gamebg.png");
        this.load.image("gameoverBackground", "assets/gameoverbg.jpg");
        this.load.atlasXML("atlas", "assets/spaceShooter2_spritesheet.png", "assets/spaceShooter2_spritesheet.xml");
        this.load.image("player", "assets/spaceShips_007.png");
    }

    create() {
        this.scene.start("Menu");
    }
}

export default Preloader;