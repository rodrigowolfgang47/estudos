var nBtn = document.querySelector('.js-after-btn'),
pBtn = document.querySelector('.js-before-btn'),
widthMasc = document.querySelector('.carrocel-itens').clientWidth,
slider = document.querySelector('.carrocel-slider'),
i = 0;



var nextBtn = function(){
    nBtn.addEventListener('click', function() {
        i++
        slider.style.transition = '.30s'
        slider.style.transform = `translate(${(-widthMasc) * i}px)`
        if (i >= slider.childElementCount){
            i = 0
            slider.style.transition = '.30s';
            slider.style.transform = `translate(${(-widthMasc) * i}px)`;
        }

    });
};

var prevtBtn = function(){
    pBtn.addEventListener('click', function() {
        i--
        slider.style.transition = '.30s';
        slider.style.transform = `translate(${(-widthMasc) * i}px)`;
        if (i < 0){
            i = slider.childElementCount
            i--
            slider.style.transition = '.30s';
            slider.style.transform = `translate(${(-widthMasc) * i}px)`;
        }
    });
};

nextBtn();
prevtBtn();