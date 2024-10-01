document.getElementById('changeColorButton').addEventListener('click', function() {
    // Genera un colore casuale
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
  