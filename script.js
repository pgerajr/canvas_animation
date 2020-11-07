let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let circle = {
    x: 10,
    y: 10,
    raio: 10,

    inicio: 0,
    fim: 2 * Math.PI,
    clockWise: false,

}

let line = {
    x: 0,
    y: 498,

    inicio: 0,
    fim: 0,
}

function drawLine(l) {

    ctx.beginPath();
    ctx.moveTo(l.inicio, l.fim);
    ctx.lineTo(l.x, l.y);

    ctx.lineWidth = 3;
    ctx.strokeStyle = "green";
    ctx.stroke();
}

function drawCircle(c) {

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue"
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.clockWise);

    ctx.fill();
}

function start() {

    setInterval(function () {
        if ((circle.x < 490) && (circle.y < 490)) {
            // circle.fim += 0.3;
            circle.x += 1;
            circle.y += 1;
        }

        drawCircle(circle);

        if (line.inicio < 498) {
            line.x += 0;
            line.y -= 1;
            line.inicio += 1;
            line.fim += 1
        }

        drawLine(line)
    }
        , 5);
}