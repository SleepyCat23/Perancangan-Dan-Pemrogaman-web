const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

const SIZE = 4;       // 4 x 4 grid
const BOX_SIZE = 125; // px, must match .box width/height in style.css

function createBoxes() {
  for (let row = 0; row < SIZE; row++) {
    for (let col = 0; col < SIZE; col++) {
      const box = document.createElement('div');
      box.classList.add('box');
      // Each box shows its own slice of the background image
      box.style.backgroundPosition = `${-col * BOX_SIZE}px ${-row * BOX_SIZE}px`;
      boxesContainer.appendChild(box);
    }
  }
}

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

createBoxes();
