function na9is() {
    let num = document.getElementById('number');
    let result = parseInt(num.textContent);
    let x = result - 1
    num.innerHTML = x;
    sign = Math.sign(x);
    switch (sign) {
        case sign = 0:
            num.style.color = "black";
            break;
        case sign = 1:
            num.style.color = "green";
            break;
        case sign = -1:
            num.style.color = "red";
            break
    }
}


function reset() {
    const num = document.getElementById('number');
    num.innerHTML = 0;
    num.style.color = "black";
}


function za2id() {
    const num = document.getElementById('number');
    let result = parseInt(num.textContent);
    let x = result + 1
    num.innerHTML = x;
    sign = Math.sign(x);
    switch (sign) {
        case sign = 0:
            num.style.color = "black";
            break;
        case sign = 1:
            num.style.color = "green";
            break;
        case sign = -1:
            num.style.color = "red";
            break
    }
}
