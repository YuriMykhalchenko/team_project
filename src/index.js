setTimeout(function () {
  const btn = document.createElement('button');
  btn.appendChild(document.createTextNode('КНОПКА'));
  btn.onclick = function () {
    window.location = 'http://www.google.com';
  };
  const sel = document.querySelectorAll("[id='upload-info']");
  sel[1].appendChild(btn);
}, 1000);
