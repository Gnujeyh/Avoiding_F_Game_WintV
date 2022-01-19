var game = new Phaser.Game(1300, 700); //페이지 크기 초기화 1300x700
var player;
var mainState = {
    // 처음에 실행, 이미지와 사운드 load
    preload: function() {
        game.load.image('player', 'Users/jeong-yiju/Desktop/게임/images/player.png');
    },

    //preload 함수 이후 실행, 여기서 게임 설정 함 
    create: function() {
        game.stage.backgroundColor = '#E1EBFA';
        game.physics.startSystem(Phaser.Physics.ARCADE);        

        this.player = game.add.sprite(100, 245, 'player');
        
        game.physics.arcade.enable(this.player);

        this.player.body.gravity.y = 1000;

        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
        
    },
    
    //게임의 로직 
    update: function(){

        if (this.player.y < 0 || this.player.y > 490)
            this.restartGame();

    },

    // 새가 점프하는 함수
    jump: function() {
    // 중력을 반대로 설정
    this.player.body.velocity.y = -350;
    },

    // Game Restart 함수
    restartGame: function() {
    // 게임을 다시 시작하게 합니다.
        game.state.start('main');
    },
          
};


game.state.add('main', mainState); //'mainState' 를 추가하고 'main' 이라고 설정

this.game.state.start('main'); //게임을 시작하기 위해 'main' 을 시작

            