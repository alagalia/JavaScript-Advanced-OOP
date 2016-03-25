//правим custom event
var customEv = new CustomEvent('tripleClick');

//избираме елемент който ще "отрази" event-a
var body = document.getElementsByTagName("body")[0];

//казваме на избрания елемент да слуша за custom event-a и какво ще прави
body.addEventListener("tripleClick", function () {
    var newDIv = document.createElement('div');
    newDIv.innerText="I am new div";
    body.appendChild(newDIv);
}, false);


//избираме причинителя на event
var element = document.getElementById("calculate");

//той ще реагира на click и при определено условие ще пали custom event
var counter = 0;
element.addEventListener('click', function() {
    counter++;
    if(counter===3){
        body.dispatchEvent(customEv)
    }

    setInterval(function(){
        counter=0;
    },2000)
}
);


//lamp event
var img = document.getElementById("lamp-image");
function changeLampState(state) {
    img.src = "lamp-" + state + ".png";
}