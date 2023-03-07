let div = '';

for (i = 200; i <= 500; i++) {
  div = document.createElement('div');

  div.innerText = '.';
  div.style.position = 'absolute';
  div.style.left = i + 'px';
  div.style.top = '20px';
  document.body.appendChild(div);
}
let tes = '';

for (j = 20; j <= 500; j++) {
  tes = document.createElement('div');
  tes.innerText = '.';
  tes.style.position = 'absolute';
  tes.style.left = i + 'px';
  tes.style.top = j + 'px';
  document.body.appendChild(tes);
}

let my = '';
for (k = 200; k <= i; k++) {
  my = document.createElement('div');
  my.innerText = '.';
  my.style.position = 'absolute';
  my.style.left = k + 'px';
  my.style.top = j + 'px';
  document.body.appendChild(my);
}

let mine = '';

for (l = 20; l <= j; l++) {}
