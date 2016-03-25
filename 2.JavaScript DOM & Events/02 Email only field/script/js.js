var div = document.getElementById('output');
var but = document.getElementById('btn');

but.addEventListener('click', function () {
    var elem,
        regex,
        match;
    elem = document.getElementById('email');
    regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    match = elem.value.match(regex);

    if (match){
        div.style.background = 'green';
    } else {
        div.style.background = 'red';
    }
    div.innerText = elem.value;
});