var game = new Phaser.Game(1920, 1080); //페이지 크기 초기화 1920x1080



game.state.add('main', mainState); //'mainState' 를 추가하고 'main' 이라고 설정
game.state.add('gameover', Over);
game.state.add('gamestart', Start);

game.state.start('gamestart'); //게임을 시작하기 위해 'main' 을 시작


            