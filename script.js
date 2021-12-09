let a = 0;

function recur () {
    if (a < 20) {
        a += 2;
        let div = document.createElement('div')
        document.body.appendChild(div);
        div.innerHTML += a + "<br>"
        recur();
    }
}

recur();