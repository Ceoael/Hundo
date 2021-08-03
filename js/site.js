function getValues() {
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        const numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter integers");
    }
}

function generateNumbers(startValue, endValue) {
    const numbers = [];

    for(let number = startValue; number <= endValue; number++) {
        numbers.push(number);
    }

    return numbers;
}

function displayNumbers(numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        const number = numbers[index];

        if(number % 2 === 0) {
            className = "even";
        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}
