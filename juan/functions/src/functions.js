
function addFunc(v1,v2) {
    let result = parseFloat(v1) + parseFloat(v2);
    document.getElementById('result').textContent = `Result = ${result}`;
}

function minusFunc(v1,v2) {
    let result = parseFloat(v1) - parseFloat(v2);
    document.getElementById('result').textContent = `Result = ${result}`;
}

function timesFunc(v1,v2) {
    let result = parseFloat(v1) * parseFloat(v2);
    document.getElementById('result').textContent = `Result = ${result}`;
}

function divideFunc(v1,v2) {
    let result = parseFloat(v1) / parseFloat(v2);
    document.getElementById('result').textContent = `Result = ${result}`;
}

function cTof(v1) {
    let val_init = parseFloat(v1);
    let result = val_init*9/5 + 32;
    let temp = '';
    if (result >= 10 && result <= 32) {
	temp = 'Low Temperature';
    } else if (result >= 33 && result <= 70) {
	temp = 'Nice Temperature';
    } else if (result >= 70 && result <= 100) {
	temp = 'High Temperature';
    } else {
	temp = 'Unknown Temperature';
    }
    document.getElementById('temperature').textContent = `Result = ${result} \xB0F, ${temp}!`;
}

function fToc(v1) {
    let result = (parseFloat(v1) - 32) * 5/9;    
    document.getElementById('temperature').textContent = `Result = ${result} \xB0C`;
}

function multAsum (v1,v2) {
    let val1 = parseInt(v1);
    let val2 = parseInt(v2);
    let result = 0;
    let resultString = '';
    for (let i = 0; i < val2; i++) {
	if (i === 0) {
	    resultString = `${val1}`;
	} else {
	    resultString += ` + ${val1}`;
	}
	result += val1;
    }
    document.getElementById('resultAsum').textContent = `Result = ${resultString} = ${result}`;
}
