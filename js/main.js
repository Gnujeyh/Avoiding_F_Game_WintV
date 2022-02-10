var game = new Phaser.Game(1920, 1080); //페이지 크기 초기화 1920x1080



game.state.add('main', mainState); 
game.state.add('gameover', Over);
game.state.add('gamestart', Start);

game.state.start('gamestart'); 


            