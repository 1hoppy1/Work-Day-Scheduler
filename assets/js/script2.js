// Forces current day to show up on jumbotron
var day = moment().format("dddd, MMM Do")
$(currentDay).html(day)

// Change color of box depending on what time of day it is

var currentHour = moment().format('H')
console.log(currentHour)


function changeBackground9() {   
    if (currentHour > 9) {
        $("#am9").addClass("past");      
    }
    if (currentHour === 9) {
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
    if (currentHour === 10) {
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
    if (currentHour === 11) {
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
    if (currentHour === 12) {
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
    if (currentHour === 13) {
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
    if (currentHour === 14) {
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
    if (currentHour === 15) {
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
    if (currentHour === 16) {
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
    if (currentHour === 17) {
        $("#pm5").addClass("present");
    }
    if (currentHour < 17) {
        $("#pm5").addClass("future");
    }
    console.log(currentHour);
}
$(document).ready(function () {
    changeBackground5();
});

//ability to click on text area and change text
$(".textarea").on("click", "span", function() {
    var text = $(this).text().trim();
    //console.log(text);
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
//



    // recreate p element
    var taskP = $("<p>")
    .addClass("textarea")
    .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);

    console.log(text);
  });
//





//add event listener

$(".time-block").click(function() {
    


    localStorage.setItem('text', 'textarea');

    alert("Hello jim");

});



/*
$("#task-form-modal .btn-primary").click(function() {

});

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        toDo: [],
        inProgress: [],
        inReview: [],
        done: []
      };
    }
  };

  */

