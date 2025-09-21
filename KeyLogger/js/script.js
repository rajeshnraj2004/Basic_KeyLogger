let pressBox = document.getElementById("press");
let releaseBox = document.getElementById('release');

const btnOn = document.getElementById('btnTurnOn');
const btnOff = document.getElementById('btnTurnOff');

btnOn.addEventListener('click', () => {
    document.addEventListener('keydown', pressOutput);
    document.addEventListener('keyup', releaseOutput);
});

btnOff.addEventListener('click', () => {
    document.removeEventListener('keydown', pressOutput);
    document.removeEventListener('keyup', releaseOutput);
    pressBox.innerHTML = '';
    releaseBox.innerHTML = '';
});

function pressOutput(event) {
    let key = event.key;
    pressBox.innerHTML = `<h3>Key "${key}" is pressed</h3>`;
}

function releaseOutput(event) {
    let key = event.key;
    releaseBox.innerHTML = `<h3>Key "${key}" is released</h3>`;
}
