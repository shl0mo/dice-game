document.getElementById('cube').addEventListener('click', rollDie);

function rollDie() {
  const cube = document.getElementById('cube');
  const randomX = Math.floor(Math.random() * 4) * 90;
  const randomY = Math.floor(Math.random() * 4) * 90;
  const randomZ = Math.floor(Math.random() * 4) * 90;

  cube.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg) rotateZ(${randomZ}deg)`;
}