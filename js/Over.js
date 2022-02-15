var Over = {
    preload : function() {
        game.load.image('bg', '../images/gameover.png');
        game.load.image('gameover', '../images/restart.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'bg');
        game.add.button(690, 650, 'gameover', this.startGame, this);
    },
    
    startGame: function() {
        game.state.start('main');
    }
};