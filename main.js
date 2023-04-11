btn1.addEventListener('click', function() {
    document.querySelectorAll(".MapLondon")[0].style.display = "flex";
    btn1.style.background = "#00c8c8";
    btn1.style.color = "#fff";                  //active
    btn1.style.border = "2px solid #00c8c8"; 

    document.querySelectorAll(".MapNY")[0].style.display = "none";
    btn2.style.background = "transparent";
    btn2.style.color = "#454647";
    btn2.style.border = "2px solid #737373";

    document.querySelectorAll(".MapParis")[0].style.display = "none";
    btn3.style.background = "transparent";
    btn3.style.color = "#454647";
    btn3.style.border = "2px solid #737373";

});

btn2.addEventListener('click', function() {
    document.querySelectorAll(".MapLondon")[0].style.display = "none";
    btn1.style.background = "transparent";
    btn1.style.color = "#454647";
    btn1.style.border = "2px solid #737373";

    document.querySelectorAll(".MapNY")[0].style.display = "flex";
    btn2.style.background = "#00c8c8";
    btn2.style.color = "#fff";                  //active
    btn2.style.border = "2px solid #00c8c8";

    document.querySelectorAll(".MapParis")[0].style.display = "none";
    btn3.style.background = "transparent";
    btn3.style.color = "#454647";
    btn3.style.border = "2px solid #737373";
});

btn3.addEventListener('click', function() {
    document.querySelectorAll(".MapLondon")[0].style.display = "none";
    btn1.style.background = "transparent";
    btn1.style.color = "#454647";
    btn1.style.border = "2px solid #737373";

    document.querySelectorAll(".MapNY")[0].style.display = "none";
    btn2.style.background = "transparent";
    btn2.style.color = "#454647";
    btn2.style.border = "2px solid #737373";

    document.querySelectorAll(".MapParis")[0].style.display = "flex";
    btn3.style.background = "#00c8c8";
    btn3.style.color = "#fff";                  //active
    btn3.style.border = "2px solid #00c8c8"; 
});