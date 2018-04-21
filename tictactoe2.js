let restart = document.getElementById('restart');
    cells = document.querySelectorAll('.item');
    text = document.getElementById('message');
    exit = document.getElementById('exit');
    flash = document.getElementById('x');
    flash2 = document.getElementById('o');

    pattern = [ 0, 0, 0,
                0, 0, 0,
                0, 0, 0];
    
    winPattern = [  ];

    player = {
        id : 1,
        sign : 'X'
    };

    computer = {
        id : -1,
        sign : 'O'
    };

    current = {
        id : 0,
        sign : 'E'
    };

    game_over = false;

    win = false;

    winner = ' ';

    steps = 0;

current.id = player.id;
current.sign = player.sign;

function reStart() {
    window.location = 'comp.html';
}

function next() {
    
    text.innerText = ((current.id == 1) ? 'X' : 'O') + ' következik.';
    return;
}

restart.addEventListener('click', reStart);

exit.addEventListener('click', function() {
    window.location = 'Kezdőlap.html';
});

function play() {
    for(let i = 0; i < pattern.length; i++) {

        document.getElementById(i).innerText = ' ';
        flash.style.color = 'orange';

        cells[i].addEventListener('click', function(cell) {

            
            if(game_over) return;
            if(pattern[i] == 0) {
                steps++;
               pattern[i] = current.id;
               if(pattern[i] == player.id) {
                    document.getElementById(i).innerText = player.sign;
                    if(steps == 1) {
                        comp_first();
                    }
                    if(steps == 2) {
                        comp_second();
                    }
                    if(steps == 3) {
                        comp_third();
                    }
                    isWin();

                    if(steps == 4) {
                        comp_fourth();
                    }
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

            current.id = current.id * 1;

            if(win) {
                myFunction();
            }

            next();
            tie();
            isWin();
            winHighlight();
            

        });

    }
}

function myFunction() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "img.jpg");
    x.setAttribute("width", "20%");
    x.setAttribute("height", "20%");
    x.setAttribute("position", "absolute");
    document.body.appendChild(x);
}

function actual() {
    if(current.id == 1) {
        flash2.style.color = 'black';
        flash.style.color = 'orange';
    }

    if(current.id == -1) {
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
        flash.style.color = 'black';
        game_over = true;
        text.innerText = 'Döntetlen';
        
    }

    actual();
}

function isWin() {
    if( pattern[0] != 0 & pattern[1] != 0 & pattern[2] != 0) {
        if(pattern[0] == pattern[1] & pattern[0] == pattern[2]) {
            win = true;
            game_over = true;
            if(pattern[0] == 1) {
                winner = player.sign;
            }
            else {
                winner = computer.sign;
            }
        }
        
    }

    if( pattern[3] != 0 & pattern[4] != 0 & pattern[5] != 0) {
        if(pattern[3] == pattern[4] & pattern[3] == pattern[5]) {
            win = true;
            game_over = true;
            if(pattern[3] == 1) {
                winner = player.sign;
            }
            else {
                winner = computer.sign;
            }
        }
    }

    if( pattern[6] != 0 & pattern[7] != 0 & pattern[8] != 0) {
        if(pattern[6] == pattern[7] & pattern[6] == pattern[8]) {
            win = true;
            game_over = true;
        }
    }

    if(pattern[0] != 0 & pattern[3] != 0 & pattern[6] != 0) {
        if(pattern[0] == pattern[3] & pattern[0] == pattern[6]) {
            win = true;
            game_over = true;
            if(pattern[0] == 1) {
                winner = player.sign;
            }
            else {
                winner = computer.sign;
            }
        }
    }

    if(pattern[1] != 0 & pattern[4] != 0 & pattern[7] != 0) {
        if(pattern[1] == pattern[4] & pattern[1] == pattern[7]) {
            win = true;
            game_over = true;
            if(pattern[1] == 1) {
                winner = player.sign;
            }
            else {
                winner = computer.sign;
            }
        }
    }

    if(pattern[2] != 0 & pattern[5] != 0 & pattern[8] != 0) {
        if(pattern[2] == pattern[5] & pattern[2] == pattern[8]) {
            win = true;
            game_over = true;
            if(pattern[2] == 1) {
                winner = player.sign;
            }
            else {
                winner = computer.sign;
            }
        }
    }

    if(pattern[0] != 0 & pattern[4] != 0 & pattern[8] != 0) {
        if(pattern[0] == pattern[4] & pattern[0] == pattern[8]) {
            win = true;
            game_over = true;
            if(pattern[0] == 1) {
                winner = player.sign;
            }
            else {
                winner = computer.sign;
            }
        }
    }

    if(pattern[2] != 0 & pattern[4] != 0 & pattern[6] != 0) {
        if(pattern[2] == pattern[4] & pattern[2] == pattern[6]) {
            win = true;
            game_over = true;
            if(pattern[2] == 1) {
                winner = player.sign;
            }
            else {
                winner = computer.sign;
            }
        }
    }
    if(win) {
        text.innerText = winner + ' győzött';
        flash.style.color = 'black';
    }
    
    

}

    function comp_first() {
            if(pattern[4] == 0) {
                cells[4].innerText = computer.sign;
                pattern[4] = computer.id;
            }
            else {
                cells[0].innerText = computer.sign;
                pattern[0] = computer.id;
            }
            next();
    }

    function comp_second() {
         
            //1. sor
            if(pattern[0] == pattern[1] & pattern[0] == player.id) {
                cells[2].innerText = computer.sign;
                pattern[2] = computer.id;
                return;
            }
            if(pattern[0] == pattern[2] & pattern[0] == player.id) {
                cells[1].innerText = computer.sign;
                pattern[1] = computer.id;
                return;
            }
            if(pattern[1] == pattern[2] & pattern[1] == player.id) {
                cells[0].innerText = computer.sign;
                pattern[0] = computer.id;
                return;
            }
            //2.sor
            if(pattern[3] == pattern[4] & pattern[3] == player.id) {
                cells[5].innerText = computer.sign;
                pattern[5] = computer.id;
                return;
            }
            if(pattern[3] == pattern[5] & pattern[3] == player.id) {
                if(pattern[4] == computer.id) {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
                else {
                    cells[4].innerText = computer.sign;
                    pattern[4] = computer.id;
                    return;
                }
                
            }
            if(pattern[4] == pattern[5] & pattern[4] == player.id) {
                cells[3].innerText = computer.sign;
                pattern[3] = computer.id;
                return;
            }
            //3.sor
            if(pattern[6] == pattern[7] & pattern[6] == player.id) {
                cells[8].innerText = computer.sign;
                pattern[8] = computer.id;
                return;
            }
            if(pattern[7] == pattern[8] & pattern[7] == player.id) {
                cells[6].innerText = computer.sign;
                pattern[6] = computer.id;
                return;
            }
            if(pattern[6] == pattern[8] & pattern[6] == player.id) {
                if(pattern[7] == computer.id) {
                    if(pattern[2] == 0 | pattern[2] == computer.id) {
                        cells[2].innerText = computer.sign;
                        pattern[2] = computer.id;
                        return;
                    }
                    else {
                        cells[1].innerText = computer.sign;
                        pattern[1] = computer.id;
                        return;
                    }
                }
                else {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
            }
            //1.oszlop
            if(pattern[0] == pattern[3] & pattern[0] == player.id) {
                cells[6].innerText = computer.sign;
                pattern[6] = computer.id;
                return;
            }
            if(pattern[3] == pattern[6] & pattern[3] == player.id) {
                cells[0].innerText = computer.sign;
                pattern[0] = computer.id;
                return;
            }
            if(pattern[0] == pattern[6] & pattern[0] == player.id) {
                cells[3].innerText = computer.sign;
                pattern[3] = computer.id;
                return;
            }
            //2.oszlop
            if(pattern[1] == pattern[4] & pattern[1] == player.id) {
                cells[7].innerText = computer.sign;
                pattern[7] = computer.id;
                return;
            }
            if(pattern[4] == pattern[7] & pattern[4] == player.id) {
                cells[1].innerText = computer.sign;
                pattern[1] = computer.id;
                return;
            }
            if(pattern[1] == pattern[7] & pattern[1] == player.id) {
                if(pattern[4] == computer.id) {
                    if(pattern[5] == 0) {
                        cells[5].innerText = computer.sign;
                        pattern[5] = computer.id;
                        return;
                    }
                    else {
                        cells[3].innerText = computer.sign;
                        pattern[3] = computer.id;
                        return;
                    }
                }
                else {
                    cells[4].innerText = computer.sign;
                    pattern[4] = computer.id;
                    return;
                }
            }
            //3.oszlop
            if(pattern[2] == pattern[5] & pattern[2] == player.id) {
                cells[8].innerText = computer.sign;
                pattern[8] = computer.id;
                return;
            }
            if(pattern[5] == pattern[8] & pattern[5] == player.id) {
                cells[2].innerText = computer.sign;
                pattern[2] = computer.id;
                return;
            }
            if(pattern[2] == pattern[8] & pattern[2] == player.id) {
                if(pattern[5] == computer.id) {
                    if(pattern[3] == 0) {
                        cells[3].innerText = computer.sign;
                        pattern[3] = computer.id;
                        return;
                    }
                    else {
                        cells[7].innerText = computer.sign;
                        pattern[7] = computer.id;
                        return;
                    }
                }
                else {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
                    return;
                }
            }
            //alap 2.lépés
            if(pattern[6] == 0 & pattern[3] == 0) {
                cells[6].innerText = computer.sign;
                pattern[6] = computer.id;
                return;
            }
            if(pattern[2] == 0 & pattern[5] == 0) {
                cells[2].innerText = computer.sign;
                pattern[2] = computer.id;
                return;
            }

            //diags
            if(pattern[2] == pattern[6] & pattern[2] == player.id) {
                if(pattern[3] == 0) {
                    cells[3].innerText = computer.sign;
                    pattern[3] = computer.id;
                    return;
                }
                else {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
                    return;
                }
            }
    }

    function comp_third() {

        if(win) return;
        //1.sor
        if(pattern[0] == pattern[1] & pattern[0] == player.id) {
            if(pattern[2] == computer.id) {
                if(pattern[3] == 0) {
                    cells[3].innerText = computer.sign;
                    pattern[3] = computer.id;
                    return;
                }
                else if(pattern[5] == 0) {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
                    return;
                }
                else if(pattern[8] == 0){
                    cells[8].innerText = computer.sign;
                    pattern[8] = computer.id;
                    return;
                }
                else {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
            }
            else {
            cells[2].innerText = computer.sign;
            pattern[2] = computer.id;
            return;
            }
        }
        if(pattern[1] == pattern[2] & pattern[1] == player.id) {
            if(pattern[0] == computer.id) {
                if(pattern[6] == 0) {
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
                else if(pattern[7] == computer.id){
                    if(pattern[3] == 0) {
                        cells[3].innerText = computer.sign;
                        pattern[3] = computer.id;
                        return;
                    }
                    else {
                        cells[8].innerText = computer.sign;
                        pattern[8] = computer.id;
                        return;
                    }
                    
                }
                else if(pattern[3] == 0) {
                    cells[3].innerText = computer.sign;
                    pattern[3] = computer.id;
                    return;
                }
                else {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
            }
            else {

            cells[0].innerText = computer.sign;
            pattern[0] = computer.id;
            return;
            }
        }
        if(pattern[0] == pattern[2] & pattern[0] == player.id) {
            if(pattern[1] == computer.id) {
                if(pattern[7] == 0) {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
                else if(pattern[6] == 0){
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
                else if(pattern[7] == 0) {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
                else if(pattern[8] == 0){
                    cells[8].innerText = computer.sign;
                    pattern[8] = computer.id;
                    return;
                }
            }
            else {
                cells[1].innerText = computer.sign;
                pattern[1] = computer.id;
                return;
            }
        }
        //2.sor
        if(pattern[3] == pattern[4] & pattern[3] == player.id) {
            if(pattern[5] == computer.id) {
                if(pattern[1] == 0) {
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
                else if(pattern[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else if(pattern[7] == 0) {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
                else if(pattern[6] == 0) {
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
                else {
                    if(pattern[1] == 0) {
                        cells[1].innerText = computer.sign;
                        pattern[1] = computer.id;
                        return;
                    }
                    else if(pattern[0] == 0) {
                        cells[0].innerText = computer.sign;
                        pattern[0] = computer.id;
                        return;
                    }
                    else if(pattern[8] == 0) {
                        cells[8].innerText = computer.sign;
                        pattern[8] = computer.id;
                        return;
                    }
                    else {
                        cells[1].innerText = computer.sign;
                        pattern[1] = computer.id;
                        return;
                    }
                }
            }
            else {
                cells[5].innerText = computer.sign;
                pattern[5] = computer.id;
                return;
            }
        }
        if(pattern[4] == pattern[5] & pattern[4] == player.id) {
            if(pattern[3] == computer.id) {
                if(pattern[6] == 0) {
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
                
                else if(pattern[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else if(pattern[1] == 0) {
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
                else if(pattern[6] == 0){
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
                else {
                    cells[7].innerText = computer.sign;
                    pattern[7] = computer.id;
                    return;
                }
            }
            else {
            cells[3].innerText = computer.sign;
            pattern[3] = computer.id;
            return;
            }
        }
        if(pattern[3] == pattern[5] & pattern[3] == player.id) {
            if(pattern[7] == 0) {
                cells[7].innerText = computer.sign;
                pattern[7] = computer.id;
                return;
            }
            else if(pattern[2] == 0) {
                cells[2].innerText = computer.sign;
                pattern[2] = computer.id;
                return;
            }
            else if(pattern[8] == 0) {
                cells[8].innerText = computer.sign;
                pattern[8] = computer.id;
                return;
            }
            else if(pattern[1] == 0) {
                cells[1].innerText = computer.sign;
                pattern[1] = computer.id;
                return;
            }
            else {
                cells[0].innerText = computer.sign;
                pattern[0] = computer.id;
                return;
            }
        }
        //3.sor
        if(pattern[6] == pattern[7] & pattern[6] == player.id) {
            if(pattern[8] == computer.id) {
                if(pattern[3] == 0) {
                    cells[3].innerText = computer.sign;
                    pattern[3] = computer.id;
                    return;
                }
                else if(pattern[5] == 0) {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
                    return;
                }
                else if(pattern[0] == 0) {
                    cells[0].innerText = computer.sign;
                    pattern[0] = computer.id;
                    return;
                }
                else if(pattern[1] == 0){
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
                else {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
            }
            else {
            cells[8].innerText = computer.sign;
            pattern[8] = computer.id;
            return;
            }
        }
        if(pattern[7] == pattern[8] & pattern[7] == player.id) {
            if(pattern[6] == computer.id) {
                if(pattern[5] == 0) {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
                    return;
                }
                else if(pattern[1] == 0) {
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
                else {
                    cells[3].innerText = computer.sign;
                    pattern[3] = computer.id;
                    return;
                }
            }
            else {
            cells[6].innerText = computer.sign;
            pattern[6] = computer.id;
            return;
            }
        }
        if(pattern[6] == pattern[8] & pattern[6] == player.id) {
            if(pattern[7] == computer.id) {
                if(pattern[1] == 0) {
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
                else if(pattern[5] == 0) {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
                    return;
                }
                else if(pattern[3] == 0) {
                    cells[3].innerText = computer.sign;
                    pattern[3] = computer.id;
                    return;
                }
                else if(pattern[0] == 0){
                    cells[0].innerText = computer.sign;
                    pattern[0] = computer.id;
                    return;
                }
            }
            else {
                cells[7].innerText = computer.sign;
                pattern[7] = computer.id;
                return;
            }
        }
        //1.oszlop
        if(pattern[0] == pattern[3] & pattern[0] == player.id) {
            
            if(pattern[6] == computer.id) {
                if(pattern[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else if(pattern[1] == 0) {
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
            }
            else {
            cells[6].innerText = computer.sign;
            pattern[6] = computer.id;
            return;
            }
        }
        if(pattern[3] == pattern[6] & pattern[3] == player.id) {
            if(pattern[0] == 0) {
            cells[0].innerText = computer.sign;
            pattern[0] = computer.id;
            return;
            } 
            else {
                cells[8].innerText = computer.sign;
                pattern[8] = computer.id;
                return;
            }
        }
        if(pattern[0] == pattern[6] & pattern[0] == player.id) {
            if(pattern[3] == computer.id) {
                if(pattern[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else {
                    cells[8].innerText = computer.sign;
                    pattern[8] = computer.id;
                    return;
                }
            }
            else {
                cells[3].innerText = computer.sign;
                pattern[3] = computer.id;
                return;
            }
        }
        //2.oszlop
        if(pattern[1] == pattern[4] & pattern[1] == player.id) {
            if(pattern[7] == computer.id) {
                if(cells[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else {
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
            }
            else {
            cells[7].innerText = computer.sign;
            pattern[7] = computer.id;
            return;
            }
        }
        if(pattern[4] == pattern[7] & pattern[4] == player.id) {
            if(pattern[1] == computer.id) {
                if(cells[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else if(pattern[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else {
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
            }
            
            else {
            cells[1].innerText = computer.sign;
            pattern[1] = computer.id;
            return;
            }
        }
        if(pattern[1] == pattern[7] & pattern[1] == player.id) {
            if(pattern[4] == computer.id) {
                if(pattern[2] == 0) {
                    cells[2].innerText = computer.sign;
                    pattern[2] = computer.id;
                    return;
                }
                else {
                    cells[8].innerText = computer.sign;
                    pattern[8] = computer.id;
                    return;
                }
            }
            else {
                cells[4].innerText = computer.sign;
                pattern[4] = computer.id;
                return;
            }
            
        }
        //3.oszlop
        if(pattern[2] == pattern[5] & pattern[2] == player.id) {
            cells[8].innerText = computer.sign;
            pattern[8] = computer.id;
            return;
        }
        if(pattern[5] == pattern[8] & pattern[5] == player.id) {
            cells[2].innerText = computer.sign;
            pattern[2] = computer.id;
            return;
        }
        if(pattern[2] == pattern[8] & pattern[2] == player.id) {
            if(pattern[5] == computer.id) {
                if(pattern[6] == 0) {
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
                else {
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
            }
            else {
                cells[5].innerText = computer.sign;
                pattern[5] = computer.id;
                return;
            }
        }
        //diag
        if(pattern[6] == pattern[4] & pattern[4] == player.id) {
            cells[2].innerText = computer.sign;
            pattern[2] = computer.id;
            return;
        }
        if(pattern[2] == pattern[4] & pattern[2] == player.id) {
            cells[6].innerText = computer.sign;
            pattern[6] = computer.id;
            return;
        }
    }

    function comp_fourth() {
        if(win) return;
        comp_third();
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
            checkRow(pattern);
            checkColumn(pattern);
            checkDiag(pattern);
        }
    }


play();
next();

