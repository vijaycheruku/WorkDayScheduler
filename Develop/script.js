$(document).ready(function () {
  
  //Using Day Js Library Todays Display format added.
let now = dayjs().format('dddd') + ', ' +  dayjs().format('MMMM') + ' ' + dayjs().format('D') + 'th'
$('#currentDay').text( now);

let timeNow = dayjs().hour();
let currentHourId = '#hour-' + timeNow;

//set current hour css class
$(currentHourId).addClass("present").removeClass('past future');

//Loop through all time blocks and set css classes accordingly
$(".time-block").each(function () {
  var timeDiv = $(this).attr("id").split("-")[1];
  if(timeDiv > timeNow) {
      $(this).addClass("future").removeClass('past present');
  }else if(timeDiv < timeNow){
      $(this).addClass("past").removeClass('future present');
  }
});


//saving the text in the event to local storage on click of save button
$(".saveBtn").on("click", function () {
  var eventDesc = $(this).siblings(".description").val();
  var eventTime = $(this).parent().attr("id");
  localStorage.setItem(eventTime, eventDesc);
})

//display events from local storage on load
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

});