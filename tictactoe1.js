let restart = document.getElementById('restart');
    cells = document.querySelectorAll('.item');
    text = document.getElementById('message');
    exit = document.getElementById('exit');
    flash = document.getElementById('x');
    flash2 = document.getElementById('o');
    
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

    game_over = false;

    winner = currentPlayer.id;

    _busy = [];

function reStart() {
    window.location = 'web_1.html';
}

function next() {
    
    text.innerText = ((currentPlayer.id == 1) ? 'X' : 'O') + ' következik.';
    if(win) {
        text.innerText = currentPlayer.sign + ' győzött';
    }
    return;
}

restart.addEventListener('click', reStart);

exit.addEventListener('click', function() {
    window.location = 'Kezdőlap.html';
});

function start() {

    let game_over = false;
    currentPlayer.sign = player1.sign;
    currentPlayer.id = player1.id;
    pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0];

}

function play() {

    start();

    for(let i = 0; i < pattern.length; i++) {
        
        document.getElementById(i).innerText = ' ';
        flash.style.color = 'orange';
        
        cells[i].addEventListener('click', function(cell) {

            _busy = [];
            if(game_over) return;
            if(pattern[i] == 0) {
                
                pattern[i] = currentPlayer.id;
                if(pattern[i] == player1.id) {
                    document.getElementById(i).innerText = player1.sign;
                }

                else if(pattern[i] == player2.id) {
                    
                    document.getElementById(i).innerText = player2.sign;
                }
                
                 
            }
            else {
                text.innerText = 'Ez a hely már foglalt!';
                cells[i].addEventListener('mouseenter', function(e) {
                    e.target.style.backgroundColor = 'red';

                    setTimeout(function() {
                        e.target.style.backgroundColor = '#887157';
                    }, 500);
                });
                return;
            }
            

            let w = isWin(currentPlayer.id);

            if(w != 0) {
                game_over = true;
                win = true;
                text.innerText = ((currentPlayer.id == 1) ? 'X' : 'O') + ' győzött';
               // return;    
            }

            currentPlayer.id = currentPlayer.id * -1;
            
           
            next();
            tie();
            actual();
            isBusy();
           
            winHighlight();

            
        }); 
        
        
    }
}



function isBusy2() {
    isBusy();
    
}

function actual() {
    if(currentPlayer.id == 1) {
        flash2.style.color = 'black';
        flash.style.color = 'orange';
    }

    if(currentPlayer.id == -1) {
        flash.style.color = 'black';
        flash2.style.color = 'orange';
    }
    if(win) {
        flash.style.color = 'black';
        flash2.style.color = 'black';
        return;
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

    actual();
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

function isBusy() {
    let busy = false;

    for(let j = 0; j < pattern.length; j++) {
        if(pattern[j] != 0) {
            //console.log('foglalt.')
        }
    }
}

function checkRow(pattern) {

    if(win) {

        if( pattern[0] != 0 & pattern[1] != 0 & pattern[2] != 0) {
            if(pattern[0] == pattern[1] & pattern[0] == pattern[2]) {
                cells[0].style.backgroundColor = 'green';
                cells[1].style.backgroundColor = 'green';
                cells[2].style.backgroundColor = 'green';
                ((pattern[0] == 1) ? 'X' : 'O') + 'győzött';
            }
        }

        if( pattern[3] != 0 & pattern[4] != 0 & pattern[5] != 0) {

            if(pattern[3] == pattern[4] & pattern[3] == pattern[5]) {
                cells[3].style.backgroundColor = 'green';
                cells[4].style.backgroundColor = 'green';
                cells[5].style.backgroundColor = 'green';
                ((pattern[3] == 1) ? 'X' : 'O') + 'győzött';
            }
        }

        if( pattern[6] != 0 & pattern[7] != 0 & pattern[8] != 0) {

            if(pattern[6] == pattern[7] & pattern[6] == pattern[8]) {
                cells[6].style.backgroundColor = 'green';
                cells[7].style.backgroundColor = 'green';
                cells[8].style.backgroundColor = 'green';
                ((pattern[6] == 1) ? 'X' : 'O') + 'győzött';
            }
        }
    }
}

function checkColumn(pattern) {
            
    if(win) {

        if(pattern[0] != 0 & pattern[3] != 0 & pattern[6] != 0) {
            if(pattern[0] == pattern[3] & pattern[0] == pattern[6]) {

                cells[0].style.backgroundColor = 'green';
                cells[3].style.backgroundColor = 'green';
                cells[6].style.backgroundColor = 'green';
                ((pattern[0] == 1) ? 'X' : 'O') + 'győzött';
            }
        }

        if(pattern[1] != 0 & pattern[4] != 0 & pattern[7] != 0) {
            if(pattern[1] == pattern[4] & pattern[1] == pattern[7]) {
                cells[1].style.backgroundColor = 'green';
                cells[4].style.backgroundColor = 'green';
                cells[7].style.backgroundColor = 'green';
                ((pattern[1] == 1) ? 'X' : 'O') + 'győzött';
            }
        }

        if(pattern[2] != 0 & pattern[5] != 0 & pattern[8] != 0) {
            if(pattern[2] == pattern[5] & pattern[2] == pattern[8]) {
                cells[2].style.backgroundColor = 'green';
                cells[5].style.backgroundColor = 'green';
                cells[8].style.backgroundColor = 'green';
                ((pattern[2] == 1) ? 'X' : 'O') + 'győzött';
            }
        }
    }
}

function checkDiag(pattern) {

    if(win) {

        if(pattern[0] != 0 & pattern[4] != 0 & pattern[8] != 0) {
            if(pattern[0] == pattern[4] & pattern[0] == pattern[8]) {
                cells[0].style.backgroundColor = 'green';
                cells[4].style.backgroundColor = 'green';
                cells[8].style.backgroundColor = 'green';
                ((pattern[0] == 1) ? 'X' : 'O') + 'győzött';
            }
        }

        if(pattern[2] != 0 & pattern[4] != 0 & pattern[6] != 0) {
            if(pattern[2] == pattern[4] & pattern[2] == pattern[6]) {
                cells[2].style.backgroundColor = 'green';
                cells[4].style.backgroundColor = 'green';
                cells[6].style.backgroundColor = 'green';
                ((pattern[2] == 1) ? 'X' : 'O') + 'győzött';
            }
        }
    }
}

function winHighlight() {
    if(game_over) {
        winner = currentPlayer.id;
        checkRow(pattern);
        checkColumn(pattern);
        checkDiag(pattern);
    }
}

play();
next();






