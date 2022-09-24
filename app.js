const containerElement = document.getElementById('container');
const rekt = containerElement.getBoundingClientRect();

const containerX = rekt.left + rekt.width / 2;
const containerY = rekt.top + rekt.height / 2;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angleDeg = getAngle(mouseY, mouseX, containerY, containerX);

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${180 + angleDeg}deg)`;
        containerElement.style.filter = `hue-rotate(${angleDeg}deg)`;
    });
});

function getAngle(my, mx, cy, cx) {
    const dy = cy - my;
    const dx = cx- mx;

    const rad = Math.atan2(dy, dx); // atan2() returns angle in radian
    const deg = rad * 180 / Math.PI; // to convert radian to degree 
    return deg;
}