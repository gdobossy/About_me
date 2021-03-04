window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function langFunction() {
    var lang_button = document.getElementById("lang_butt");
    var p_hu = document.getElementById("hu");
    var p_eng = document.getElementById("eng");
    if (lang_button.textContent == "eng") {
        lang_button.textContent = "hu";
        p_hu.style.display = "none";
        p_eng.style.display = "block";
    }
    else {
        lang_button.textContent = "eng";
        p_hu.style.display = "block";
        p_eng.style.display = "none";
    }
}