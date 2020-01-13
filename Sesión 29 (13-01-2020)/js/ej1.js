document.addEventListener('DOMContentLoaded', () => {
    //---------------------------------------------------
    // Linea
    const c1 = document.getElementById("canvas1");
    const ct1 = c1.getContext("2d");

    ct1.moveTo(0, 0);
    ct1.lineTo(150, 100);
    ct1.lineTo(300, 0);

    ct1.stroke();

    //---------------------------------------------------
    // Texto
    const c2 = document.getElementById("canvas2");
    const ct2 = c2.getContext("2d");

    ct2.font = "30px Arial";
    ct2.fillText("Texto en canvas", 20, 60);

    //---------------------------------------------------
    // Circulo
    const c3 = document.getElementById("canvas3");
    const ct3 = c3.getContext("2d");

    ct3.moveTo(0, 0);
    ct3.lineTo(300, 0);
    ct3.lineTo(300, 150);
    ct3.lineTo(0, 150);
    ct3.lineTo(0, 0);
    ct3.fillStyle = "#8ce66c";
    ct3.fill();

    ct3.stroke();

    ct3.beginPath();
    ct3.arc(150, 75, 70, 0, 2 * Math.PI); // ox, yx, rx, iniciox, finalx
    ct3.stroke();
    ct3.fillStyle = "#6ab150";
    ct3.fill();
    ct3.font = "60px Arial";
    ct3.fillStyle = "#1b1e23";
    ct3.fillText("$", 134, 95);

    //---------------------------------------------------
    // Imagen
    const c4 = document.getElementById("canvas4");
    const ct4 = c4.getContext("2d");
    const img4 = document.getElementById('imgCv');

    ct4.drawImage(img4, 50, -25);




})