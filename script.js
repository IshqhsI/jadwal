const boxes = document.querySelectorAll('.box');
let currentBoxIndex = 0;
var animatedText = document.querySelector('.animated-text');

function toggleBox() {
  boxes[currentBoxIndex].classList.remove('active');
  currentBoxIndex = (currentBoxIndex + 1) % boxes.length;
  boxes[currentBoxIndex].classList.add('active');
}

// Panggil fungsi toggleBox setiap 3 detik
setInterval(toggleBox, 3000);
