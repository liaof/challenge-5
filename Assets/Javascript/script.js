var displayCurrentDate = function(){
    var currentDayEl = $("#currentDay");
    var currentDate = moment().format("MMM Do YYYY");     
    $(currentDayEl).html(currentDate);
    console.log(currentDayEl);
};

displayCurrentDate();