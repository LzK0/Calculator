var result = document.getElementById('result') as HTMLInputElement;

var btns = document.querySelectorAll('.items') as NodeListOf<HTMLButtonElement>;
;

type ValueParam = string | null;

function showResult(val: ValueParam): void {
    result.innerHTML += val;
}

function clearCalc(): void {
    result.innerHTML = '';
}

function calc(): void {
    result.innerHTML = eval(result.innerHTML);
}

function deleteVal(): void {
    result.innerHTML = result.innerHTML.slice(0, -1);
}

function controlCalc(val: ValueParam): void {
    if (val == 'clear') {
        clearCalc();
        return;
    } else if (val == 'calculate') {
        calc();
        return;
    } else if(val == '<'){
        deleteVal();
        return;
    }
    showResult(val);
}

btns.forEach(item => {
    var val = item.getAttribute('data-action');
    item.addEventListener('click', () => { controlCalc(val) });
})
