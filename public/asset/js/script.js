"use strict";
var result = document.getElementById('result');
var btns = document.querySelectorAll('.items');
;
function showResult(val) {
    result.innerHTML += val;
}
function clearCalc() {
    result.innerHTML = '';
}
function calc() {
    result.innerHTML = eval(result.innerHTML);
}
function deleteVal() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}
function controlCalc(val) {
    if (val == 'clear') {
        clearCalc();
        return;
    }
    else if (val == 'calculate') {
        calc();
        return;
    }
    else if (val == '<') {
        deleteVal();
        return;
    }
    showResult(val);
}
btns.forEach(item => {
    var val = item.getAttribute('data-action');
    item.addEventListener('click', () => { controlCalc(val); });
});
