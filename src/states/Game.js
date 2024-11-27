import Phaser from "phaser";

class Game extends Phaser.Scene {
    constructor() {
        super("Game");

        this.bg = null;

        this.lives = null;
        this.points = null;

        this.fontStyle = null;
        this.textLives = null;
        this.textPoints = null;

        this.kLeft = null;
        this.kRight = null;
        this.kShoot = null;

        this.player = null;
        this.speed = 2.5;

        this.timer = null;
    }

    create() {
        this.bg = this.add.sprite(0, 0, "gameBackground").setOrigin(0, 0);

        this.timer = this.time.addEvent({
            delay: 4000, // 4 * 1000 ms
            callback: this.spawnEnemy,
            callbackScope: this,
            loop: true
        })

        this.lives = 3;
        this.points = 0;

        this.player = this.add.sprite(0, 0, "player").setOrigin(0, 0);
        this.player.setScale(0.5, 0.5);
        this.player.x = this.bg.width / 2 - this.player.width / 2;
        this.player.y = this.bg.height - this.player.height / 2;

        this.kLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.kRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.kShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.fontStyle = {
            font: '20px Arial',
            fill: '#FFCC00',
            stroke: '#333',
            strokeThickness: 5
        };

        this.textLives = this.add.text(0, 0, "VIDAS: " + this.lives, this.fontStyle);
        this.textPoints = this.add.text(0, 0, "PUNTOS: " + this.points, this.fontStyle);
        this.updatePlayerVars();
    }

    update() {
        if (this.lives == 0)
            this.toGameOver();

        this.controlPlayer();
    }

    controlPlayer() {
        if (this.kLeft.isDown) {
            this.player.x -= this.speed;
        }
        if (this.kRight.isDown) {
            this.player.x += this.speed;
        }
    }

    spawnEnemy() {
        console.log("SPAWN ENEMIGO!");
        this.toGameOver();
    }

    updatePlayerVars() {
        this.textLives.setText("VIDAS: " + this.lives, this.fontStyle);
        this.textLives.x = 0;
        this.textLives.y = 0;
        this.textPoints.setText("PUNTOS: " + this.points, this.fontStyle);
        this.textPoints.x = this.bg.width - this.textPoints.width;
        this.textPoints.y = 0;
    }

    toGameOver() {
        this.scene.start("GameOver");
    }
}

export default Game;