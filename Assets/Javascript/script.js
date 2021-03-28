
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
    var currentHour = moment().add(2,'hours').format("HH");
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
        
        
    
   
    
    //console.log(taskDiv);

    
};

var loopTing = function(){
    //loop through each hour row div element
    for (var i = 0; i < 9; i ++){
        auditTask(workHoursEl[i],i);
    }
    
}



loopTing();
displayCurrentDate();