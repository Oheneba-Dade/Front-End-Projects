const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

button.addEventListener('click', function() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    newColor = `rgb(${r},${g},${b})`;
    const sum = r + g + b;
    document.body.style.backgroundColor = newColor;
    h1.innerText = `The background color is ${newColor}`;
    if (sum < 180) {
        h1.style.color = 'white';
        p.style.color = 'white'
    }
    else if (sum >= 180) {
        h1.style.color = 'black';
        p.style.color = 'black';
    }
});

