const canvas = document.getElementById('canvas');
const generateBtn = document.getElementById('generate');

let generateArt = () => {
    let randomColor = ['#f2f7f5', '#00473e', '#faae2b', '#ffa8ba', '#fa5246', '#475d5b'];

    for(let i=0; i<500; i++) {
        let randomLeft = Math.floor(Math.random() * document.documentElement.clientWidth - 140);
        let randomTop = Math.floor(Math.random() * document.documentElement.clientHeight - 140);
        let randomWidth = Math.floor(Math.random() * 150);
        let randomHeight = Math.floor(Math.random() * 100);
        let randomRotation = Math.floor(Math.random() * 360);
        let randomColorNum = Math.floor(Math.random() * randomColor.length);

        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = `${randomWidth}px`;
        div.style.height = `${randomHeight}px`;
        div.style.top = `${randomTop}px`;
        div.style.left = `${randomLeft}px`;
        div.style.transform = `rotate(${randomRotation}deg)`;
        div.style.backgroundColor = randomColor[randomColorNum];
        canvas.append(div);
    }
}

generateArt();

