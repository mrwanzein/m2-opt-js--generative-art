const canvas = document.getElementById('canvas');
const generateBtn = document.getElementById('generate');
const widthRange = document.getElementById('width');
const heightRange = document.getElementById('height');
const shadowLength = document.getElementById('Shadow length');

let generateArt = () => {
    let randomColor = ['#f2f7f5', '#00473e', '#faae2b', '#ffa8ba', '#fa5246', '#475d5b'];
    
        let randomLeft = Math.floor(Math.random() * document.documentElement.clientWidth - 140);
        let randomTop = Math.floor(Math.random() * document.documentElement.clientHeight - 140);
        let randomWidth = Math.floor(Math.random() * widthRange.value);
        let randomHeight = Math.floor(Math.random() * heightRange.value);
        let randomRotation = Math.floor(Math.random() * 360);
        let randomColorNum = Math.floor(Math.random() * randomColor.length);
        let randomColorNum2 = Math.floor(Math.random() * randomColor.length);
        let randomRadius = Math.floor(Math.random() * 100);

        let randomShadowLength = Math.floor(Math.random() * shadowLength.value) - shadowLength.value;
        let randomShadowBlur = Math.floor(Math.random() * (45 - 10) + 1) + 10;
        let randomShadowSpread = Math.floor(Math.random() * 10) - 10;
        
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = `${randomWidth}px`;
        div.style.height = `${randomHeight}px`;
        div.style.top = `${randomTop}px`;
        div.style.left = `${randomLeft}px`;
        div.style.transform = `rotate(${randomRotation}deg)`;
        div.style.background = `linear-gradient(${randomColor[randomColorNum]} 0%, ${randomColor[randomColorNum]}50 50%, ${randomColor[randomColorNum]} 100%)`;
        div.style.boxShadow = `${randomShadowLength}px ${randomShadowLength}px ${randomShadowBlur}px ${randomShadowSpread}px ${randomColor[randomColorNum2]}`;
        div.style.borderRadius = `${randomRadius}px`;
        div.style.animation = 'fadeIn 0.2s';
        canvas.append(div);
}

let cleanUp = () => {
    while(canvas.lastChild) {
        canvas.lastChild.remove();
    }
    generateArt();
}

setInterval(generateArt, 20)

generateBtn.addEventListener('click', cleanUp);