const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeigth = event.target.querySelector('#weigth');
    const inputHeigth = event.target.querySelector('#heigth');

    const weigth = Number(inputWeigth.value);
    const heigth = Number(inputHeigth.value);

    if (!weigth) {
        setResult('Invalid value', false);
        return
    }
    if (!heigth) {
        setResult('Invalid value', false);
        return
    }

    const bmi = getImc(weigth, heigth);
    const levelBmi = getImcLevel(bmi);

    const msg = 'Your IMC is '+(bmi)+' ('+(levelBmi)+')';
    setResult(bmi, true);
    console.log(msg);
});

function getImcLevel(bmi) {
    const level = ['Under weigth', 'Normal weigth', 'overweigth', 'obesity lv1', 'obesity lv2', 'obesity lv3']
    if (bmi >= 39.9) {
        return level[5]
    } if (bmi >= 34.9) {
        return level[4]
    } if (bmi >= 29.9) {
        return level[3]
    } if (bmi >= 24.9) {
        return level[2]
    } if (bmi >= 18.55) {
        return level[1]
    } if (bmi < 18.55) {
        return level[0]
    }
}


function getImc(weigth, heigth) {
    const bmi = weigth / heigth ** 2;
    return bmi.toFixed(2);
}

function createP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createP()

    if (isValid){
        p.classList.add('result-paragraph');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    result.appendChild(p);
}
