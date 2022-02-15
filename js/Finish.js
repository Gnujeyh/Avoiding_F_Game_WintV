var Finish = {
    preload : function() {
        game.load.image('finish_bg', '../images/finish.png');
        //game.load.image('gamestart', '../images/restart.png');

    },
    create: function() {
        game.add.sprite(0, 0, 'finish_bg');
        //game.add.button(0, 0, 'gamestart', this.startGame, this);
    },
    
    /*startGame: function() {
        game.state.start('main');
    }*/
};