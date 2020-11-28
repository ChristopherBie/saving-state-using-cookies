var charity = Cookies.get("favourite charity");
if(charity) {
    document.querySelector('.message').innerText = "You selected " + charity + ".";
} else {
    document.querySelector('.message').innerText = "Please select your favourite charity on the main page.";
}

function resetAndReload() {
    Cookies.remove("favourite charity");
    location.reload();
}

var reset = document.getElementsByClassName('reset');
for(var i = 0; i < reset.length; i++) {
    reset[i].addEventListener('click', function() {
        resetAndReload()
    });
}