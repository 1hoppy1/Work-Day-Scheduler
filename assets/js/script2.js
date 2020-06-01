// Forces current day to show up on jumbotron
var day = moment().format("dddd, MMM Do")
$(currentDay).html(day)

// Change color of box depending on what time of day it is

var currentHour = moment().format('H')

function changeBackground9() {   
    if (currentHour > 9) {
        $("#am9").addClass("past");      
    }
    if (currentHour == 9) {
        $("#am9").addClass("present");
    }
    if (currentHour < 9) {
        $("#am9").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground9();
});

function changeBackground10() {   
    if (currentHour > 10) {
        $("#am10").addClass("past");      
    }
    if (currentHour == 10) {
        $("#am10").addClass("present");
    }
    if (currentHour < 10) {
        $("#am10").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground10();
});

function changeBackground11() {   
    if (currentHour > 11) {
        $("#am11").addClass("past");      
    }
    if (currentHour == 11) {
        $("#am11").addClass("present");
    }
    if (currentHour < 11) {
        $("#am11").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground11();
});

function changeBackground12() {   
    if (currentHour > 12) {
        $("#pm12").addClass("past");      
    }
    if (currentHour == 12) {
        $("#pm12").addClass("present");
    }
    if (currentHour < 12) {
        $("#pm12").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground12();
});

function changeBackground1() {   
    if (currentHour > 13) {
        $("#pm1").addClass("past");      
    }
    if (currentHour == 13) {
        $("#pm1").addClass("present");
    }
    if (currentHour < 13) {
        $("#pm1").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground1();
});

function changeBackground2() {   
    if (currentHour > 14) {
        $("#pm2").addClass("past");      
    }
    if (currentHour == 14) {
        $("#pm2").addClass("present");
    }
    if (currentHour < 14) {
        $("#pm2").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground2();
});

function changeBackground3() {   
    if (currentHour > 15) {
        $("#pm3").addClass("past");      
    }
    if (currentHour == 15) {
        $("#pm3").addClass("present");
    }
    if (currentHour < 15) {
        $("#pm3").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground3();
});

function changeBackground4() {   
    if (currentHour > 16) {
        $("#pm4").addClass("past");      
    }
    if (currentHour == 16) {
        $("#pm4").addClass("present");
    }
    if (currentHour < 16) {
        $("#pm4").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground4();
});

function changeBackground5() {   
    if (currentHour > 17) {
        $("#pm5").addClass("past");      
    }
    if (currentHour == 17) {
        $("#pm5").addClass("present");
    }
    if (currentHour < 17) {
        $("#pm5").addClass("future");
    }
}
$(document).ready(function () {
    changeBackground5();
});


$(".textarea").on("click", function(e) {
    elid = e.target.id
    p = document.getElementById(elid)
    tb = document.getElementById(elid + 'tb')
    tb.value = p.innerHTML
    p.style.display = 'none'
    tb.style.display = 'block'
    
})

 function loadItems() {
    
    
    am9p = document.getElementById('am9-p')
    am9p.innerHTML = localStorage.getItem('am9-p')
    
    am10p = document.getElementById('am10-p')
    am10p.innerHTML = localStorage.getItem('am10-p')
    
    am11p = document.getElementById('am11-p')
    am11p.innerHTML = localStorage.getItem('am11-p')
    
    pm12p = document.getElementById('pm12-p')
    pm12p.innerHTML = localStorage.getItem('pm12-p')
    
    pm1p = document.getElementById('pm1-p')
    pm1p.innerHTML = localStorage.getItem('pm1-p')
    
    pm2p = document.getElementById('pm2-p')
    pm2p.innerHTML = localStorage.getItem('pm2-p')
    
    pm3p = document.getElementById('pm3-p')
    pm3p.innerHTML = localStorage.getItem('pm3-p')
    
    pm4p = document.getElementById('pm4-p')
    pm4p.innerHTML = localStorage.getItem('pm4-p')
    
    pm5p = document.getElementById('pm5-p')
    pm5p.innerHTML = localStorage.getItem('pm5-p')

 }
