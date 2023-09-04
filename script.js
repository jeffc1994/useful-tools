let rotated = false;
function showContent(choice) {
    const bmiContent = document.getElementById('BMI-content');
    const stopwatchContent = document.getElementById('Stopwatch-Content');
    const rndContent = document.getElementById('RND-Content');
    const colourPickerContent = document.getElementById('Colour-Picker-Content');
    const weatherContent = document.getElementById('Weather-Content');
    const contentMap = {
        'BMI': bmiContent,
        'Stopwatch': stopwatchContent,
        'RND': rndContent,
        'Colour-Picker': colourPickerContent,
        'Weather': weatherContent,
        'GuessMe': guessMeContent,
        'MatchCards': matchCardsContent,
        'TTT': TTTContent,
        'RPS': RPSContent
    }


    var button = document.getElementById(choice);
    var contentElement = contentMap[choice];

    contentElement.style.display = (contentElement.style.display === 'block' ? 'none' : 'block');

    console.log(button.style.transform);
    if (button.style.transform == "rotate(0deg)" || button.style.transform == '') {
        button.style.transform = "rotate(90deg)";
        button.style.transition = "transform 0.5s ease";
    } else {
        button.style.transform = "rotate(0deg)";
        button.style.transition = "transform 0.5s ease";
    }
}
function hideAllToolDesc() {
    var toolDescElements = document.querySelectorAll('.tool-desc');
    toolDescElements.forEach(function (element) {
        element.style.display = 'none';
    });
}

function changeUnitStatement() {
    let unitType = document.getElementById('metricOrImperial').value;
    let heightStatementMetric = document.getElementById('metricHeightWrapper');
    let heightStatementImperial = document.getElementById('imperialHeightWrapper');
    let weightStatementMetric = document.getElementById('metricWeightWrapper');
    let weightStatementImperial = document.getElementById('imperialWeightWrapper');


    if (unitType == 'metric') {
        heightStatementMetric.style.display = 'inline';
        weightStatementMetric.style.display = 'inline';
        heightStatementImperial.style.display = 'none';
        weightStatementImperial.style.display = 'none';
    } else {
        heightStatementMetric.style.display = 'none';
        weightStatementMetric.style.display = 'none';
        heightStatementImperial.style.display = 'inline';
        weightStatementImperial.style.display = 'inline';
    }
}
function calculateBMI() {
    let unitType = document.getElementById('metricOrImperial').value;
    let ftValue = document.getElementById('imperialFt').value;
    let incValue = parseInt(document.getElementById('imperialIn').value);
    let ageValue = document.getElementById('age').value;
    let cmValue = document.getElementById('metricCm').value;
    let kgValue = document.getElementById('metricKg').value;
    let lbsValue = document.getElementById('imperiallbs').value
    let calculatedBMI = document.getElementById('calculatedBMI');
    let weightCategory = document.getElementById('weightCategory');
    let weightCatToAssign;
    let bmiValue;

    if (unitType == 'metric') {
        bmiValue = kgValue / (cmValue / 100) ** 2;
    } else {
        console.log('hi');
        bmiValue = lbsValue / ((12 * ftValue + incValue) ** 2) * 703;
    }
    console.log(703 * 155 / (12 * 5 + 7) ** 2);
    console.log(lbsValue);
    console.log(ftValue);
    console.log(incValue);
    console.log(bmiValue);

    if (bmiValue < 18.5) {
        weightCatToAssign = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        weightCatToAssign = 'Normal Weight';
    } else if (bmiValue >= 24.9 && bmiValue <= 29.9) {
        weightCatToAssign = 'Overweight';
    } else {
        weightCatToAssign = 'Obese';
    }

    weightCategory.textContent = weightCatToAssign;
    calculatedBMI.textContent = bmiValue.toFixed(0);

}
