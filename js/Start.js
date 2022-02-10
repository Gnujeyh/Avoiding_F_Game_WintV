var Start = {
    preload : function() {
        game.load.image('start_bg', '../images/1.png');
        game.load.image('gamestart', '../images/start.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'start_bg');
        game.add.button(0, 0, 'gamestart', this.startGame, this);
    },
    
    startGame: function() {
        game.state.start('main');
    }
};