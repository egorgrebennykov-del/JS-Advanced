function substract() {
    let first = Number(document.getElementById('firstNumber').value);
    let second = Number(document.getElementById('secondNumber').value);

    let result = first - second;

    document.getElementById('result').value = result;
}