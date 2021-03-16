var today = moment();
var currentDay = document.getElementById("currentDay");

currentDay.textContent = moment().format('dddd MMMM Do YYYY');