var buttons = document.querySelector('.buttons');

function makeButton(name) {
    var button = document.createElement('button');
    buttons.append(button);
    button.innerText = name;
    button.style.fontSize = "1.1rem";
    button.addEventListener('click', function() {
        select(name);
    });
}

function select(name) {
    Cookies.set("favourite charity", name);
    location.href = "selection.html";
}

makeButton('The Food Bank');
makeButton('The Homeless Foundation / Canadian Alliance to End Homelessness');
makeButton('The Children\'s Miracle Network & Extra Life');