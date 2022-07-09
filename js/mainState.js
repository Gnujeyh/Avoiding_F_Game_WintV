var mainState = {

    // 처음에 실행, 이미지와 사운드 load
    preload: function() {
        game.load.image('player', '../images/player.png');
        game.load.image('player1', '../images/player_1.png');//스페이스 눌렀을 때
        game.load.image('pipe', '../images/3_Obstacle_N.png');//네이비색 장애물
        game.load.image('pipe1', '../images/3_Obstacle_W.png');//흰색 장애물
        //game.load.image('score_bg', '../images/score_bg.png');//흰색 장애물
    },

    //preload 함수 이후 실행, 여기서 게임 설정 함
    create: function() {
        
        this.score = -3;
        
        //game.add.sprite(0, 0, 'score_bg');
        
        game.stage.backgroundColor = '#E1EBFA';
        game.physics.startSystem(Phaser.Physics.ARCADE); 
        
        textStyle_Key = { font: "bold 25px sans-serif", fill: "#161C27", align: "center" };
        textStyle_Value = { font: "bold 25px sans-serif", fill: "#fff", align: "center" };
        
        game.add.text(30, 20, "SCORE", textStyle_Key);
        this.scoreTextValue = game.add.text(120, 20, "0", textStyle_Value);
        

        this.player = game.add.sprite(100, 245, 'player1');
        //물리 시스템 적용
        game.physics.arcade.enable(this.player);
        //중력 적용
        this.player.body.gravity.y = 1000;
        //스페이스 누르면 점프
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);
        
        // 장애물 그룹
        this.pipes = game.add.group();
        //장애물 타이머
        this.timer = game.time.events.loop(2700, this.addRowOfPipes, this);
        //player타이머
        this.timer = game.time.events.loop(1000, this.playerSpace, this);
        //장애물 판정
        pipe=this.physics.add.sprite(60,150,'pipe');
        pipe1=this.physics.add.sprite(60,150,'pipe1');
        
    },
    
    //게임의 로직 
    update: function(){

        if (this.player.y < 0 || this.player.y > 850) {
            
            if (this.score > 30){
                this.finishGame();
            }
            else {
                this.restartGame();
            }
        }
        
        game.physics.arcade.overlap(this.player, this.pipes, this.restartGame, null, this);
        
    },

    // 새가 점프하는 함수
    jump: function() {
    // 중력을 반대로 설정
    this.player.body.velocity.y = -350;
        
    //space 바를 눌렀지 않았을 경우 player 로딩 이미지
    this.player.loadTexture('player');
    },
    
    //space 바를 눌렀을 경우 로딩 player 이미지
    playerSpace: function(){
        this.player.loadTexture('player1');
    },
    
    /*addScore: function(){
        this.score += 1;
        this.scoreTextValue.setText(this.score);
        
    },*/

    // Game Restart 함수
    restartGame: function() {
    // 게임을 다시 시작하게 합니다.
        if(this.score > 30){
            game.state.start('gamefinish');
        }
        else{
            game.state.start('gameover');
        }
    },
    
     // Game Finish 함수
    finishGame: function() {
    // 게임을 다시 시작하게 합니다.
        game.state.start('gamefinish');
    },

    //장애물 추가
    addOnePipe: function(x, y) {
        
        //장애물 색상 선택
        //숫자 선택:0-남색,1-흰색
        var Obstacle=Math.floor(Math.random() * 2);
        
        if(Obstacle==0) { //Obstacle이 0일 때,
            // x와 y 위치에 파이프 만들기
            var pipe = game.add.sprite(x, y, 'pipe');
        }
        if(Obstacle==1) { //Obstacle이 1일 때,
            // x와 y 위치에 파이프 만들기
            var pipe = game.add.sprite(x, y, 'pipe1');
        }
    
        // 이전에 생성된 그룹에 추가
        this.pipes.add(pipe);
    
        // 파이프를 물리 시스템에 추가
        game.physics.arcade.enable(pipe);
    
        // 파이프에 속도를 추가하여 왼쪽으로 이동합니다.
        pipe.body.velocity.x = -200;
    
        // 파이프가 더 이상 보이지 않을 때 자동으로 파이프를 삭제합니다.
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },

    //장애물의 빈공간을 선택하는 함수
    addRowOfPipes: function() {
        this.score += 1;
        if (this.score > 0) {
            this.scoreTextValue.setText(this.score);
        }
        
        
        // 무작위로 1과 5 사이의 숫자 선택
        var hole = Math.floor(Math.random() * 4) + 1;
    
        // '빈공간'과 '빈공간 + 1' 위치에 하나의 큰 빈공간이있는 상태
        for (var i = 0; i < 8; i++)
            if (i != hole && i != hole + 1)//선택된 랜덤 숫자가 아닌 곳에 장애물 생성
                this.addOnePipe(1620, i * 150);

    }
          
};

