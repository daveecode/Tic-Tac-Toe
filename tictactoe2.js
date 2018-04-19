let restart = document.getElementById('restart');
    cells = document.querySelectorAll('.item');
    text = document.getElementById('message');
    exit = document.getElementById('exit');

    pattern = [ 0, 0, 0,
                0, 0, 0,
                0, 0, 0];
    
    winPattern = [ 0b111000000, 0b000111000, 0b000000111, 
                   0b100100100, 0b010010010, 0b001001001,
                   0b100010001, 0b001010100 ];

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

    steps = 0;

current.id = player.id;
current.sign = player.sign;

function reStart() {
    window.location = 'comp.html';
}

function next() {
    
    text.innerText = ((current.id == 1) ? 'X' : 'O') + ' következik.';
    // if(win) {
    //     text.innerText = current.sign + ' győzött';
    // }
    return;
}

restart.addEventListener('click', reStart);

exit.addEventListener('click', function() {
    window.location = 'Kezdőlap.html';
});

function play() {
    for(let i = 0; i < pattern.length; i++) {

        document.getElementById(i).innerText = ' ';

        cells[i].addEventListener('click', function(cell) {

            steps++;
            if(game_over) return;
            if(pattern[i] == 0) {
                
               pattern[i] = current.id;
               if(pattern[i] == player.id) {
                    document.getElementById(i).innerText = player.sign;
                    console.log(steps);
                    if(steps == 1) {
                        comp_first();
                    }
                    console.log(current.id);
                    if(steps == 2) {
                        comp_second();
                    }
                    if(steps == 3) {
                        comp_third();
                    }
                }
            }

            current.id = current.id * 1;

            next();

        });

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
    }

    function comp_third() {
        //1.sor
        if(pattern[0] == pattern[1] & pattern[0] == player.id) {
            cells[2].innerText = computer.sign;
            pattern[2] = computer.id;
            return;
        }
        if(pattern[1] == pattern[2] & pattern[1] == player.id) {
            if(pattern[0] == computer.id) {
                if(pattern[6] == 0) {
                    cells[6].innerText = computer.sign;
                    pattern[6] = computer.id;
                    return;
                }
                else {
                    cells[8].innerText = computer.sign;
                    pattern[8] = computer.id;
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
                else {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
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
                cells[5].innerText = computer.sign;
                pattern[5] = computer.id;
                return;
            }
        }
        if(pattern[4] == pattern[5] & pattern[4] == player.id) {
            cells[3].innerText = computer.sign;
            pattern[3] = computer.id;
            return;
        }
        if(pattern[3] == pattern[5] & pattern[3] == player.id) {
            if(pattern[7] == 0) {
                cells[7].innerText = computer.sign;
                pattern[7] = computer.id;
                return;
            }
            else {
                cells[8].innerText = computer.sign;
                pattern[8] = computer.id;
                return;
            }
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
                if(pattern[1] == 0) {
                    cells[1].innerText = computer.sign;
                    pattern[1] = computer.id;
                    return;
                }
                else {
                    cells[5].innerText = computer.sign;
                    pattern[5] = computer.id;
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

        // le kell kezelni a necces átlókat
    }

    function comp_fourth() {

    }


play();
next();

