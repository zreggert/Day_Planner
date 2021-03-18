var today = moment();
var currentTime = moment().hours();

$("#currentDay").text(moment().format('LLLL'));

$(document).ready(function() {
    //setting items to local storage
    $('#9 .btn').click(function() {
        localStorage.setItem($("#9"), $('.description').val());
    })
    $('#10 .btn').click(function() {
        localStorage.setItem($("#10"), $('.description').val());
    })
    $('.btn').click(function() {
        localStorage.setItem($("#11"), $('.description').val());
    })
    $('.btn').click(function() {
        localStorage.setItem($("#12"), $('.description').val());
    })

    
    $('#9 .description').val(localStorage.getItem($("#9"), $('.description').val()))
})
