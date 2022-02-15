var Start = {
    preload : function() {
        game.load.image('start_bg', '../images/start_bg.png');
        game.load.image('gamestart', '../images/start_b.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'start_bg');
        game.add.button(710, 700, 'gamestart', this.startGame, this);
    },
    
    startGame: function() {
        game.state.start('main');
    }
};