var body = document.body;
var candidate;
var array = [];
function chooseNumber() {
    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i += 1) {
        var chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
}
chooseNumber();
console.log(array);
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input);
input.type = 'text';
input.maxLength = 4;
var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);
var wrongCount = 0;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var answer = input.value;
    if (answer === array.join('')) {
        result.textContent = '홈런';
        input.value = '';
        input.focus();
        chooseNumber();
        wrongCount = 0;
    }
    else {
        var answerArray = answer.split('');
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        if (wrongCount > 10) {
            result.textContent = "Over 10times! The Answer is ".concat(array.join(','), ".");
            input.value = '';
            input.focus();
            chooseNumber();
            wrongCount = 0;
        }
        else {
            console.log('wrong: ', answerArray);
            for (var i = 0; i <= 3; i += 1) {
                if (Number(answerArray[i]) === array[i]) {
                    console.log('Correct digit');
                    strike += 1;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) {
                    console.log('Correct number');
                    ball += 1;
                }
            }
            result.textContent = strike + 'S' + ball + 'B';
            input.value = '';
            input.focus();
        }
    }
});
