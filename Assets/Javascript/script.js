
var workHoursEl = [$("#9am"),$("#10am"),$("#11am"),$("#12pm"),$("#1pm"),$("#2pm"),$("#3pm"),$("#4pm"),$("#5pm")
//to get the index of each element
//let hoom = workHours[i] ; hoom[0].attributes[2].value;
];

//Displays Current Day in Header
var displayCurrentDate = function(){
    var currentDayEl = $("#currentDay");    
    $(currentDayEl).html(moment().format("MMM Do YYYY"));
};

displayCurrentDate();

var auditTask = function(hourEl,i){
    var currentHour = moment().format("HH");
    //checks the time stamp of the passed block
    var taskHour = hourEl[0].attributes[2].value;
    //select the 2nd div in the hour row class, aka the task text area
    var taskDiv = hourEl[0].children[1];
    //console.log(taskDiv);
    
    console.log(currentHour);
    console.log(taskHour);
    
    console.log(currentHour>taskHour);
    console.log(currentHour<taskHour);
    console.log(currentHour==taskHour);
        
        if(currentHour>taskHour){//past
            $(taskDiv).addClass("past");
            console.log("past");
        } else if(currentHour==taskHour){//present
            $(taskDiv).addClass("present");
            console.log("present");
        } 
        else if(currentHour<taskHour){//future
            $(taskDiv).addClass("future");
            console.log("future");
        }  ;
};

var loopTing = function(){
    //loop through each hour row div element
    for (var i = 0; i < 9; i ++){
        auditTask(workHoursEl[i],i);
    }
    
}

//replaces <p> of clicked div with a textarea
$(".container").on("click",".task", function(){
    //select the <p> of the clicked .task
    var clickedElement = $(this)[0].children[0];
    //check if the clicked element isn't already a textarea
    //if we don't, everytime we click the textarea the extant text gets deleted
    if ($(clickedElement).is("p")){
        console.log(clickedElement);
        var text = $(clickedElement).text().trim();
        console.log(text);
    
        var textInput = $("<textarea>").addClass("form-control").val(text);
        $(clickedElement).replaceWith(textInput);
        textInput.trigger("focus");
    };
});

//reconstructs <p> upon unfocusing of corresponding textarea
//$(".container").on("blur", "textarea", function(){
 //   var text = $(this).val().trim();
//
 //   var taskP = $("<p>").text(text);
 //   $(this).replaceWith(taskP);
//});

$(".container").on("click", ".saveBtn", function(){
    var sibling = $(this).prev()[0].children;
    

    var text = $(sibling).val();
    console.log(text);
    //var text = closestText.text().trim();
    //console.log(text);
    var taskP = $("<p>").text(text);
    $(sibling).replaceWith(taskP);
});


displayCurrentDate();



//check every 15 minutes if the status of each time-block is still correct
setInterval (function(){
    loopTing();
}, 1000*60*15);
//but because we don't want to wait 15 minutes after each time we load 
//the webpage for the time-blocks to be coloured, we manually call the status loop once
loopTing();

