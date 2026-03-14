const cvs = document.getElementById("canvas");
const pen = cvs.getContext("2d");
const noise = new SimplexNoise();

let width, height, time;

function initCanvas() {
    width = cvs.width = window.innerWidth;
    height = cvs.height = window.innerHeight;
    pen.fillRect(0, 0, width, height);
    pen.fillStyle = "rgba(0, 0, 0, 0.02)";
    pen.strokeStyle = "red";
    pen.lineWidth = 2;
}

function heartShape(centerX, centerY, scale) {
    pen.beginPath();
    const noiseZoom = 0.03;
    const noiseStrength = 0.08 * scale;
    const step = 0.01;

    for (let t = 0; t < Math.PI * 2; t += step) {
        const cosT = Math.cos(t);
        const sinT = Math.sin(t);

        const distortion = noise.noise3D(
            cosT / noiseZoom,
            sinT / noiseZoom,
            time + scale * 100
        ) * noiseStrength;

        const radius = scale + distortion;

        const px = radius * 16 * Math.pow(sinT, 3);
        const py = -radius * (
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t)
        );

        pen.lineTo(centerX + px, centerY + py);
    }

    pen.stroke();
}

function render(timestamp) {
    requestAnimationFrame(render);
    time = timestamp / 1000;

    pen.fillRect(0, 0, width, height);

    const layers = 6;
    for (let i = 1; i <= layers; i++) {
        const scale = Math.min(width, height) * 0.004 * i;
        heartShape(width / 2, height / 2, scale);
    }
}

initCanvas();
window.addEventListener("resize", initCanvas);
requestAnimationFrame(render);