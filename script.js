function updateClock() {

    let now = new Date();

    let hour = String(now.getHours()).padStart(2, '0');
    let minute = String(now.getMinutes()).padStart(2, '0');
    let second = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("digitalClock").innerHTML =
        hour + ":" + minute + ":" + second;

    document.getElementById("date").innerHTML =
        now.toDateString();

    drawClock(now);

}

setInterval(updateClock, 1000);

updateClock();

function drawClock(now) {

    const canvas = document.getElementById("clock");

    const ctx = canvas.getContext("2d");

    const radius = 100;

    ctx.clearRect(0, 0, 220, 220);

    ctx.save();

    ctx.translate(110, 110);

    ctx.beginPath();

    ctx.arc(0, 0, radius, 0, Math.PI * 2);

    ctx.strokeStyle = "white";

    ctx.lineWidth = 4;

    ctx.stroke();

    for (let i = 1; i <= 12; i++) {

        let angle = (i * Math.PI / 6) - Math.PI / 2;

        ctx.fillStyle = "white";

        ctx.font = "18px Arial";

        ctx.fillText(i,

            Math.cos(angle) * 80 - 6,

            Math.sin(angle) * 80 + 6);

    }

    let sec = now.getSeconds();

    let min = now.getMinutes();

    let hr = now.getHours() % 12;

    drawHand((hr * Math.PI / 6) + (min * Math.PI / 360), 55, 6, "white");

    drawHand((min * Math.PI / 30), 75, 4, "white");

    drawHand((sec * Math.PI / 30), 90, 2, "red");

    ctx.restore();

    function drawHand(pos, length, width, color) {

        ctx.beginPath();

        ctx.lineWidth = width;

        ctx.strokeStyle = color;

        ctx.moveTo(0, 0);

        ctx.rotate(pos - Math.PI / 2);

        ctx.lineTo(length, 0);

        ctx.stroke();

        ctx.rotate(-(pos - Math.PI / 2));

    }

}