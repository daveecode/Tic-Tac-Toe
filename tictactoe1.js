let restart = document.getElementById('restart');
    cells = document.querySelectorAll('.item');
    text = document.getElementById('message');
    
    pattern = [ 0, 0, 0,
                0, 0, 0,
                0, 0, 0 ];

    winPattern = [ 0b111000000, 0b000111000, 0b000000111, 
                   0b100100100, 0b010010010, 0b001001001,
                   0b100010001, 0b001010100 ];
    
    empty = ' ';
    
    player1 = {
        sign : 'X',
        id : 1,
    };

    player2 = {
        sign : 'O',
        id : -1
    };

    currentPlayer = {
        sign : 'E',
        id : 0
    };

    win = false;

function reStart() {
    start();
    start();
    next();
}

function next() {
    text.innerText = ((currentPlayer.id == 1) ? 'X' : 'O') + ' következik.';
    return;
}

restart.addEventListener('click', reStart);

function start() {

    let game_over = false;
    currentPlayer.sign = player1.sign;
    currentPlayer.id = player1.id;
    pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(let i = 0; i < pattern.length; i++) {
        
        
       // cells[i].style.backgroundColor = 'yellow';
        document.getElementById(i).innerText = ' ';
       // text.innerText = ((currentPlayer.id == 1) ? 'X' : 'O') + ' következik.';
        //cells[i] = 0;

        
        
        cells[i].addEventListener('click', function(cell) {
            
            if(game_over) return;
            console.log('fasz');
            if(pattern[i] == 0) {
                
               // text.innerText = ((currentPlayer.id == 1) ? 'O' : 'X') + ' következik.';
                pattern[i] = currentPlayer.id;
                if(pattern[i] == player1.id) {
                    document.getElementById(i).innerText = player1.sign;
                }

                else if(pattern[i] == player2.id) {
                    cells[i].style.color = 'white';
                    document.getElementById(i).innerText = player2.sign;
                }
                 
            }
            
            
            
            let w = isWin(currentPlayer.id);

            if(w != 0) {
                game_over = true;
                win = true;
                winHighlight();
                text.innerText = ((currentPlayer.id == 1) ? 'X' : 'O') + ' győzött';
                return;    
            }

            currentPlayer.id = currentPlayer.id * -1;

            
            next();
            tie();
            
        }); 
    }
}

function tie() {
     
    let zero = 0;
    for(let i = 0; i < pattern.length; i++) {
        
        
        if(pattern[i] == 0) {
            
            zero++;
            
        }
    }

    if(zero == 0) {
        game_over = true;
        text.innerText = 'Döntetlen';
    }
}

function isWin(param) {
    let player = 0;
    for(let i = 0; i < pattern.length; i++) {
        player <<= 1;
        if(pattern[i] == param) {
            player++;
        }
    }

    for(let i = 0; i < winPattern.length; i++) {
        if((player & winPattern[i]) == winPattern[i]) {
            return winPattern[i];
        }
    } 

    return 0;
}

function winHighlight() {
    if(win) {
        cells[0].style.backgroundColor = 'green';
    }
}

start();
next();




