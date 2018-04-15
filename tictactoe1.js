let canvas = document.getElementById('canvas');
let text = document.getElementById('message');
let ctx = canvas.getContext('2d');
let exit = document.getElementById('exit');
let cell = 200;
canvas.width = canvas.height = 3 * cell;
let mouse = {   x: -1,
                y: -1};
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let winBoard = [0b111000000, 0b000111000, 0b000000111, 0b100100100, 0b010010010, 0b001001001, 0b100010001, 0b001010100];
let empty = 0, X = 1, O = -1;
let player = X;
let game_over = false;
let win2 = [];

canvas.addEventListener('mouseout', function(e) {
    mouse.x = -1;
    mouse.y = -1;
});

canvas.addEventListener('mousemove', function(e) {
    let x = e.pageX - canvas.offsetLeft,
        y = e.pageY - canvas.offsetTop;

    mouse.x = x;
    mouse.y = y;
});

canvas.addEventListener('click', function(e) {
    go(getCellNumbers(mouse.x, mouse.y));
});

exit.addEventListener('click', function(e) {

    window.location = 'Kezdőlap.html';
});

next();

function win (param) {
    let player = 0;
    for(let i = 0; i < board.length; i++) {
        player <<= 1;
        if(board[i] == param) {
            player++;
        }
    }


    for(let i = 0; i < winBoard.length; i++) {
        if((player & winBoard[i]) == winBoard[i]) {
            return winBoard[i];
        }
    } 

    return 0;
}

function next() {
    text.textContent = ((player == X) ? 'X' : 'O') + ' követlezik.';
    return;
}

function go(param) {

    if(game_over) return;
    if(board[param] != empty) {
        text.textContent = 'Ez a hely már foglalt!';
        return;
    }

    board[param] = player;
    let w = win(player);

    if(w != 0) {
        game_over = true;
        text.textContent = ((player == X) ? 'X' : 'O')+ ' győzött. Gratulálok!';
        
        let check = 1;

        for(let i = board.length - 1; i >= 0; i--) {
            
            if((check & w) == check) {
                win2.push(i);
            }
            check <<= 1;
    }
        return;
    }
    else if(board.indexOf(0) == -1) {
        game_over = true;
        text.textContent = 'Döntetlen!';
        return;
    }
    player = player * (-1);

    next();
}

function Board() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Highlight();
    Win();
    Draw();
    Fill();
    function Draw() {

        ctx.lineWidth = 15;
        ctx.strokeStyle = 'orange';

        ctx.beginPath();
        ctx.moveTo(cell, 0);
        ctx.lineTo(cell, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cell * 2, 0);
        ctx.lineTo(cell * 2, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, cell);
        ctx.lineTo(canvas.width, cell);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, 2 * cell);
        ctx.lineTo(canvas.width, 2 * cell);
        ctx.stroke();
    }

    function Fill() {
        for(let i = 0; i < board.length; i++) {
            let c = getCoordinates(i);

            ctx.save();
            ctx.translate(c.x + cell / 2, c.y + cell / 2);

            if(board[i] == X) drawX();
            else if(board[i] == O) drawO();
            ctx.restore();
        }
    }

    function drawX() {

        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(-cell / 3, -cell / 3);
        ctx.lineTo(cell / 3, cell / 3);
        ctx.moveTo(cell / 3, -cell / 3);
        ctx.lineTo(-cell / 3, cell / 3);
        ctx.stroke();
        
    }

    function drawO() {

        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.arc(0, 0, cell / 3, 0, Math.PI * 2);
        ctx.stroke();
    }

    function Highlight() {
        let n = getCellNumbers(mouse.x, mouse.y);
        let k = getCoordinates(n);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fillRect(k.x, k.y, cell, cell);

        ctx.save();

        if(board[n] != empty) {
            ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
            ctx.fillRect(k.x, k.y, cell, cell);
        }
    }

    function Win() {

        if(game_over) {
            ctx.fillStyle = 'rgba(0, 255, 0, 0.4)';
            win2.forEach(function (e) {
                let cells = getCoordinates(e);
                ctx.fillRect(cells.x, cells.y, cell, cell);
            });
        }
    }

    requestAnimationFrame(Board);
}

function getCoordinates(param) {
    let x = param % 3 * cell,
        y = Math.floor(param / 3) * cell;

    return {
        'x' : x,
        'y' : y
    };
}

function getCellNumbers (x, y) {
    return (Math.floor(x / cell) % 3) + Math.floor(y / cell) * 3;
}

Board();