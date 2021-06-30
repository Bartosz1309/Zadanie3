const zadanie2 = `
<h1>Zadanie 2</h1>
<p id="paragraf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<input onclick="changeClass('black');" type="radio" name="text" />Jednolicie czarny tekst
<input onclick="changeClass('random');" type="radio" name="text" />Losowy kolor
<input onclick="changeClass('rainbow');" type="radio" name="text"  />Każda litera w losowym kolorze
`

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const colors = ['red', 'yellow', 'green', 'blue', 'orange'];
let lastClick = ''

function changeClass(name) {
    if (lastClick !== name) {
        if (name === 'black') {
            document.getElementById('paragraf').innerText = text;
            document.getElementById('paragraf').className = 'color-black';
        } else if (name === 'random') {
            document.getElementById('paragraf').innerText = text;
            const color = colors[Math.floor(Math.random() * 5)];
            document.getElementById('paragraf').className = 'color-' + color;
        } else if (name === 'rainbow') {
            document.getElementById('paragraf').innerHTML = text.map(function (char) {
                const color = 'color-' + colors[Math.floor(Math.random() * 5)];
                return '<span class="' + color +'">' + char + '</span>';
            }).join('');
        }
        lastClick = name;
    }
}
